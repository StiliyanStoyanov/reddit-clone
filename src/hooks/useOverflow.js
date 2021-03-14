import {useEffect, useState} from "react";

function isElement(element) {
    return element instanceof Element || element instanceof HTMLDocument;
}

function isOverflown(element) {
    if (isElement(element)) {
        return element.scrollHeight > element.clientHeight
            || element.scrollWidth > element.clientWidth
    }
}

const useOverflow = (elementRef) => {
    const [overflow, setOverflow] = useState(false);

    useEffect(() => {
        if (isOverflown(elementRef.current)) {
            setOverflow(true);
        }
    }, [elementRef]);


    return overflow;
};

export default useOverflow;
