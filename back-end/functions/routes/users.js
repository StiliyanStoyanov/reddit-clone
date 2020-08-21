const express = require('express');
const router = express.Router();
const firebase = require('firebase');
const admin = require('firebase-admin');
const config = require('../firebase-config');
const {csrfProtection} = require('../utils/csrf');
const firebaseAuth = firebase.auth();
const auth = admin.auth();

const googleApisBaseUrl = 'https://identitytoolkit.googleapis.com/v1'
const refreshIdToken = async (refreshToken) => {
    return fetch(`${googleApisBaseUrl}/token?key=${config.apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=refresh_token&refresh_token=${refreshToken}`
    });
}

const fiveMinutes = 60 * 5 * 1000;
const oneWeek = 60 * 60 * 24 * 7 * 1000;
const oneHour = 60 * 60 * 1000;

// TODO: Update to secure for production
const secureCookieOptions = {httpOnly: true, sameSite: "strict", secure: false, maxAge: oneWeek}

router.post('/sessionLogin', csrfProtection, (req, res) => {
    const idToken = req.body.idToken;
    const token = req.headers.authorization;
    console.log(token);
    const csrfToken = req.headers["csrf-token"];
    const refreshToken = req.cookies.refreshToken;
    const idTokenExpiresInOneHour = Date.now() + oneHour;
    const tokenExpireCookieOptions = { sameSite: "strict", maxAge: oneHour};
    console.log("Missing idToken: ", !idToken);
    console.log("Missing csrfToken: ", !csrfToken);
    console.log('_'.repeat(60));
    if (!idToken || !refreshToken) {
        res.end();
        return;
    }
    if (!idToken || !csrfToken) {
        res.status(401).send(JSON.stringify({error: "Unauthorized Please Login"}));
        return;
    }
    // Only proceed to verify the user token if both idToken and refresh token exist
    if (idToken && refreshToken) {
        const checkRevoked = true
        // Verify the token
        auth.verifyIdToken(idToken, checkRevoked).then(user => {
            // If the token is valid send the response of the user data to the client
            res.cookie('idTokenExpiresIn', idTokenExpiresInOneHour, tokenExpireCookieOptions);
            res.send(user);
        }).catch(error => {
             // Check the error for the sign in if its expired idToken try to refresh it with the refresh token
            if (error.errorInfo.code === "auth/id-token-expired") {
                refreshIdToken(refreshToken).then(validRefreshToken => {
                    const {id_token, refresh_token, expires_in, user_id} = validRefreshToken;

                    res.cookie('idTokenExpiresIn', idTokenExpiresInOneHour, tokenExpireCookieOptions);
                    res.cookie('refreshToken', refresh_token, secureCookieOptions);
                    auth.getUser(user_id).then(user => {
                        const {email} = user;
                        const clientData = JSON.stringify({email, idToken: id_token});
                        res.send(clientData);
                    }).catch(error => {
                        console.log(error);
                        res.status(400).send(error.json());
                    });
                }).catch(error => {
                    // In case of invalid Refresh token send Unauthorized Error to the client
                    console.error(error);
                    res.status(401).send(JSON.stringify({error: "Invalid Refresh Token"}));
                })
                return;
            }
            // TODO: Improve error validation for any other errors
            res.status(401).send(JSON.stringify({error: "Invalid Token"}));
        });
        return;
    }
    // In case that there is idToken but no refreshToken send Unauthorized Error to the client
    res.status(401).send(JSON.stringify({error: 'UNAUTHORIZED_REQUEST'}));
});

router.post('/login', csrfProtection, (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    // Check for email and password before proceeding
    if (!email || !password) {
        res.type('application/json').status(400).send({"error": "invalid credentials"});
        return;
    }


    // Function sending the data to the Google API for email password sign in for verification
    const signInWithPassword = async (email, password) => {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${config.apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password, returnSecureToken: true})
        });
        return response.json();
    }

    signInWithPassword(email, password).then(response => {
        const error = response.error;
        if (error) {
            res.status(400).send(JSON.stringify(error));
            return;
        }
        const {
            displayName,
            uid,
            email,
            idToken,
            expiresIn,
            refreshToken
        } = response;
        res.cookie('refreshToken', refreshToken, secureCookieOptions);
        res.send(JSON.stringify({displayName, email, idToken, expiresIn, uid}));
    });
});

router.post('/register', (req, res) => {

});

router.post('/logout', (req, res) => {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).send('Unauthorized');
    }
    const token = authorizationHeader.split(' ').pop();
    auth.verifyIdToken(token).then(user => {
        auth.revokeRefreshTokens(user.uid).then(() => {
            res.status(205).end();
        }).catch(err => {
            console.log(err);
            res.status(403).send({error: 'UNAUTHORIZED_REQUEST'});
        })
    }).catch(error => {
        console.log(error)
        res.end();
    });
    res.end();
});

module.exports = router;