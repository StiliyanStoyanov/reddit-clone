export function authSubmitStatusReducer (state, action) {
    switch (action.type) {
        case "ERROR": {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                buttonDisabled: false
            }
        }
        case "DISABLE_BUTTON": {
            return {
                ...state,
                buttonDisabled: true
            }
        }
        case "ENABLE_BUTTON": {
            return {
                ...state,
                buttonDisabled: false
            }
        }
        case "CLEAR_ERROR": {
            return {
                ...state,
                error: null
            }
        }
        default: {
            console.error("Invalid Reducer Action Type");
            return state
        }
    }
}

export const authSubmitStatusReducerTypes = {
    ERROR: "ERROR",
    DISABLE_BUTTON: "DISABLE_BUTTON",
    ENABLE_BUTTON: "ENABLE_BUTTON"
}