import {useState} from "react";

export function useExpandOrCollapse(array = [], collapsedMaxLength = 10, expandMessage = 'Show more', collapseMessage = 'Show less') {
    const [expanded, setExpanded] = useState(false);
    const [message, setMessage] = useState(expandMessage);
    const [currentList, setCurrentList] = useState(() => {
        return array.slice(0, collapsedMaxLength)
    });

    const expand = () => {
        setMessage(collapseMessage);
        setExpanded(true);
        setCurrentList(array);
    }
    const collapse = () => {
        setMessage(expandMessage);
        setExpanded(false);
        setCurrentList(array.slice(0, collapsedMaxLength));
    }

    return [{expanded, message, list: currentList}, {expand, collapse}]
}