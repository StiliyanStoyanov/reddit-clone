/** @jsxImportSource @emotion/react */
import LocationDisplay from "./LocationDisplay";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {search_button} from "../../styles/searchable_styles/search_dropdown_button_styles";

const SearchableButton = ({ignoreFocus, toggleDropdown, handleFocus}) => {
    return (
        <button
            css={[search_button]}
            onMouseEnter={() => { ignoreFocus.current = true}}
            onMouseLeave={() => { ignoreFocus.current = false}}
            onMouseDown={toggleDropdown}
            onFocus={handleFocus}
        >
            <LocationDisplay/>
            <FontAwesomeIcon icon={faCaretDown}/>
        </button>
    );
};


export default SearchableButton;
