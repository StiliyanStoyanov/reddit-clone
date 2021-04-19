import {useEffect, useRef} from "react";

export const useDocumentTitle = (title, retainOnUnmount = false) => {
    const defaultTitle = useRef(document.title);
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, [title]);

    useEffect(() => {
        // https://github.com/facebook/react/issues/15841
        const memoTitle = defaultTitle.current
        return () => {
            if (!retainOnUnmount) {
                document.title = memoTitle;
            }
        };
    }, [retainOnUnmount]);
}