import {getCookie} from "./getCookie";

export const getCsrfToken = (callback) => {
    if (getCookie("CSRF-Token")) {
        callback(getCookie("CSRF-Token"));
    } else {
        return fetch('http://localhost:5001/echo-blue/europe-west3/api/csrf', {
            method: 'GET',
            credentials: "include"
        }).then(() => {
            callback(getCookie("CSRF-Token"));
        }).catch(err => console.error(err));
    }
}


// if (getCookie("CSRF-Token")) {
//     callback(getCookie("CSRF-Token"));
// } else {
//     return fetch('http://localhost:5001/echo-blue/europe-west3/api/csrf', {
//         method: 'GET',
//         credentials: "include"
//     }).then(() => {
//         callback(getCookie("CSRF-Token"));
//     }).catch(err => console.error(err));
// }