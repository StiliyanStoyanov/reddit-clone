import {validateUsername} from "./validateUsername";
const required = "Field is required"
const passwordMin = "Password must be at least 6 characters"
const passwordMax = "Password cannot exceed 254 characters"
const usernameMin = "Username must be at least 3 characters"
const usernameMax = "Username cannot exceed 24 characters"

export const rules = {
    username: {
        required: {value: true, message: required},
        minLength: {value: 3, message: usernameMin},
        maxLength: {value: 24, message: usernameMax},
        validate: validateUsername,
    },
    email: {
        required: {value: true, message: required}
    },
    password: {
        required: {value: true, message: required},
        minLength: {value: 6, message: passwordMin},
        maxLength: {value: 254, message: passwordMax}
    }
}