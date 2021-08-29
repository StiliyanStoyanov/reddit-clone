/** @jsxImportSource @emotion/react */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {search_input, search_input_container} from "../styles/navigation_styles";


const NavSearch = () => {
    return (
        <div css={[search_input_container]}>
            <FontAwesomeIcon icon={faSearch}/>
            <input id="search" autoComplete="off" placeholder="Search" css={search_input} type="text"/>
        </div>
    );
};

export default NavSearch;
