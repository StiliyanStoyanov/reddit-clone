import {useEffect, useState} from "react";

const useStateWithLocalStorage = localStorageKey => {
    const [value, setValue] = useState(
        localStorage.getItem(localStorageKey) || 'test'
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, value);
    });
    return [value, setValue];
};

export {useStateWithLocalStorage}