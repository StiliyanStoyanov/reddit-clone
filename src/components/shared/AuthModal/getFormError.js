const makeErrorObject = (name, errorCode, errorMessage) => {
    return {
        name: name,
        error: {
            type: errorCode,
            message: errorMessage
        }
    }
};
export function getFormError(errorCode, errorMessage) {
    switch (errorCode) {
        case 'auth/invalid-email': {
            const message = 'The email address is improperly formatted'
            return makeErrorObject('email', errorCode, message)
        }
        case 'auth/email-already-exists': {
            return makeErrorObject('email', errorCode, errorMessage)
        }
        case 'auth/invalid-password': {
            const message = 'The password is incorrect'
            return makeErrorObject('password', errorCode, message)
        }
        case 'auth/wrong-password': {
            const message = 'The password is incorrect'
            return makeErrorObject('password', errorCode, message)
        }
        case 'auth/user-disabled': {
            let message = 'The user account has been disabled.'
            return makeErrorObject('email', errorCode, message)
        }
        case 'auth/user-not-found': {
            const message = 'There is no user corresponding to this email.'
            return makeErrorObject('email', errorCode, message)
        }
        case 'auth/uid-already-exists': {
            const message = 'The username is already taken'
            return makeErrorObject('username', errorCode, message)
        }
        default: {
            return makeErrorObject(
                'internal',
                'auth/internal-error',
                'Server error please try again later.'
            )
        }
    }
}