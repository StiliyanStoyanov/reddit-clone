/* eslint-disable no-unused-vars */
import React, {createContext, useContext, useMemo, useReducer, useState} from "react";
const Context = createContext({});

const contextDefault = {
    isThemeDark: true,
}

export const StoreProvider = ({ children, initialState = contextDefault }) => {
    const [store, dispatch] = useState(initialState);

    const contextValue = useMemo(() => [store, dispatch], [store, dispatch]);

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}

export default function useStore() {
    return useContext(Context);
}