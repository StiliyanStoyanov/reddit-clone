const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const firebaseConfig = require('./firebase-config');
admin.initializeApp();
firebase.initializeApp(firebaseConfig);

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {csrfProtection} = require('./utils/csrf');
const users = require('./routes/users');

// TODO: Update before deployment
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
            const msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 200,
    methods: "GET,PUT,POST,DELETE"
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
/*
//-- Custom CSRF Error Message --//
app.use(csrf({cookie: cookieOptions}))
app.use(function (err, req, res, next) {
    if (err) {
        console.log(err.message);
        res.status(401).send(err.message);
    }
    res.end();
});
*/

app.get('/csrf', csrfProtection, (req, res) => {
    // TODO: Update Cookie settings for production
    res.cookie('CSRF-Token', req.csrfToken(), {sameSite:"strict", secure: false});
    res.end();
});
app.get('/', (req, res) => {res.send('<h1>Echo API</h1>');});
app.use('/users', users);
app.get('*', (req, res) => { res.send('Route dosen\'t exist'); });

exports.api = functions.region('europe-west3').https.onRequest(app);


