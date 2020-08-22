import makeStore from "../hooks/useStore";

const storeDefault = {
    isThemeDark: true
}

const reducer = (state, action) => {
    console.log('STATE:  ', state);
    console.log('ACTION: ', action);
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                isThemeDark: !state.isThemeDark
            }
        }
        default: {
            console.error("Invalid Reducer Action Type");
            return {...state}
        }
    }
}

const [
    StoreProvider,
    useStore,
    useDispatch
] = makeStore(reducer, storeDefault);

export {StoreProvider, useStore, useDispatch}