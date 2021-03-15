import {useEffect, useRef} from "react";

export const useDocumentTitle = (title, retainOnUnmount = false) => {
    const defaultTitle = useRef(document.title);
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    useEffect(() => {
        return () => {
            if (!retainOnUnmount) {
                document.title = defaultTitle.current;
            }
        };
    }, []);
}