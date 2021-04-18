import {useRef, useEffect} from "react";

export const useClickOutside = (elementRef, callback, open) => {
    const callbackRef = useRef();
    callbackRef.current = callback;

    useEffect(() => {
        if (!elementRef.current || !elementRef.current instanceof HTMLElement || typeof callbackRef.current != "function" || !open) return;

        const handleClickOutside = event => {
            // Check if the referenced element doesn't contain the clicked element (e.target)
            // Meaning the click was outside
            if (!elementRef.current.contains(event.target) && callbackRef.current) {
                callbackRef.current(event);
            }
        }
        const handleKeyPress = event => {
            if (event.key === 'Escape') {
                callbackRef.current(event);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [elementRef, callbackRef, open]);
}