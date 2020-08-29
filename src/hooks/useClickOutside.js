import React from "react";

export const useClickOutside = (elementRef, callback, open, additionalRef) => {
    const callbackRef = React.useRef();
    callbackRef.current = callback;

    React.useEffect(() => {
        const handleClickOutside = event => {
            // Check if the referenced element doesn't contain the clicked element (e.target)
            // Meaning the click was outside
            if (!elementRef?.current?.contains(event.target) && callbackRef.current) {
                callbackRef.current(event);
            }
            // Special case to trigger the callback if additionalRef is provided
            if (additionalRef?.current && !additionalRef.current.contains(event.target)) {
                callbackRef.current(event);
            }
        }
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                callbackRef.current(event);
            }
        }
        // Only Attach this listener when the dropdown menu is open
        if (open) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener("keydown", handleKeyPress);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [elementRef, callbackRef, additionalRef, open]);
}