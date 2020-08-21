const csrf = require('csurf');
// TODO: Update cookie security for production
const csrfCookieOptions = {httpOnly: true, sameSite: "strict", secure: false}
module.exports = {
    csrfProtection: csrf({
        cookie: csrfCookieOptions,
        value: (req) => { return req.headers['csrf-token']}
    })
}