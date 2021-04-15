import {useRef} from "react";

// https://www.youtube.com/watch?v=wXLf18DsV-I&t=764s
// https://stackoverflow.com/questions/14388291/how-to-get-the-previous-and-next-elements-of-an-array-loop-in-javascript/14388333?fbclid=IwAR0EiYe3syZNvU6qd2FWSKC4S7iTpFkiJ2BxAMiiJ5VXSeXkvex_PXYqPnE#14388333
const useHighlight = (refs) => {
    const highlight = useRef({
        content: null,
        ref: null,
        index: -1
    });
    const moveNext = event => {
        if (refs.current.length === 0) return;
        const currentIndex = highlight.current.index;
        const nextIndex = (currentIndex + 1) % refs.current.length;
        if (nextIndex === currentIndex) return;

        const current = highlight.current.ref;
        const next = refs.current[nextIndex];
        if (!next) {return console.error(`invalid index(${nextIndex}) for refs array: `, refs.current)}
        if (current) {
            current.removeAttribute("data-selected");
        }
        next.ref?.setAttribute("data-selected", true);
        highlight.current.content = next.content
        highlight.current.ref = next.ref
        highlight.current.index = nextIndex;
        next.ref.scrollIntoView({block: "nearest"});
    }

    const movePrevious = event => {
        if (refs.current.length === 0) return;
        const currentIndex = highlight.current.index;
        const placeholderIndex = currentIndex >= 0 ? currentIndex : 0
        const previousIndex = (placeholderIndex + refs.current.length - 1) % refs.current.length
        if (previousIndex === currentIndex) return;

        const current = highlight.current.ref;
        const prev = refs.current[previousIndex];
        if (!prev) {return console.error(`invalid index(${previousIndex}) for refs array: `, refs.current)}
        if (current) {
            current.removeAttribute("data-selected");
        }
        prev.ref?.setAttribute("data-selected", true);
        highlight.current.content = prev.content
        highlight.current.ref = prev.ref
        highlight.current.index = previousIndex;
        prev.ref.scrollIntoView({block: "nearest"});
    }
    const clearHighlight = event => {
        const currentIndex = highlight.current.index;
        if (currentIndex >= 0) {
            if (refs.current.length - 1 >= currentIndex ) {
                refs.current[currentIndex].ref.removeAttribute("data-selected");
            }
            highlight.current.content = null
            highlight.current.ref = null
            highlight.current.index = -1
        }
    }

    const setHighlight = event => {
        const findIndex = refs.current.findIndex(object => object.ref === event.target)
        if (findIndex >= 0) {
            clearHighlight(event);
            const match = refs.current[findIndex];
            match.ref.setAttribute("data-selected", "true");
            highlight.current.content = match.content || null
            highlight.current.ref = event.target;
            highlight.current.index = findIndex;
        }
    }

    return {highlight, moveNext, movePrevious, setHighlight, clearHighlight}
};

export default useHighlight;
