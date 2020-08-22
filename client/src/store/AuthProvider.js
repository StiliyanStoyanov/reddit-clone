import makeStore from "../hooks/useStore";

const authReducer = (state, action) => {
    console.log('STATE:  ', state) ;
    console.log('ACTION: ', action);
    switch (action.type) {
        case "LOGIN": {
            return {...state, user: action.payload}
        }
        default: {
            console.error("Invalid Reducer Action Type");
            return {...state}
        }
    }
}

const [
    AuthProvider,
    useAuth,
    useAuthDispatch
] = makeStore(authReducer, {});

export {AuthProvider, useAuth, useAuthDispatch}