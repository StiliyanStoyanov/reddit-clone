import {useState} from "react";

const useToggle = (initialActive = false) => {
    const [active, setActive] = useState(initialActive);
    const toggle = (e) => {
        setActive(prevState => !prevState);
    }
    const close = (e) => {
        setActive(false);
    }
    const open = (e) => {
        setActive(true);
    }

    return [active, {toggle, close, open}]
};

export default useToggle;
