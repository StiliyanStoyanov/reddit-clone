/** @jsxImportSource @emotion/react */
import {createContext, useCallback, useContext, useMemo, useRef, useState} from "react";
import DropdownToggle from "./DropdownToggle";
import ReactFocusLock from "react-focus-lock";
import {useClickOutside} from "../../../hooks/useClickOutside";
import {dropdown, dropdown_content, dropdown_content_visible} from "../../../styles/dropdown_styles";

const DropdownStore = createContext({});
const DropdownMethods = createContext({});
const Dropdown = ({icon, children}) => {
    const dropdownRef = useRef();
    const [open, setOpen] = useState(false);
    const toggleDropdown = useCallback(event => setOpen(prevState => !prevState), []);
    const closeDropdown = useCallback(event => {setOpen(false);}, []);
    const openDropdown = useCallback(event => setOpen(true), []);
    const dropdownMethods = useMemo(() => {
        return {toggleDropdown, closeDropdown, openDropdown}
    }, [closeDropdown, openDropdown, toggleDropdown]);
    useClickOutside(dropdownRef, closeDropdown, open);
    return (
        <div css={[dropdown]} ref={dropdownRef}>
            <DropdownToggle
                open={open}
                icon={icon}
                toggleDropdown={toggleDropdown}
            />
            <div css={[dropdown_content, open && dropdown_content_visible]}>
                <ReactFocusLock disabled={!open} returnFocus={true}>
                    <DropdownStore.Provider value={open}>
                        <DropdownMethods.Provider value={dropdownMethods}>
                            {children}
                        </DropdownMethods.Provider>
                    </DropdownStore.Provider>
                </ReactFocusLock>
            </div>
        </div>
    );
};
export const useDropdownStore = () => {
    return useContext(DropdownStore);
}
export const useDropdownMethods = () => {
    return useContext(DropdownMethods);
}
export default Dropdown

