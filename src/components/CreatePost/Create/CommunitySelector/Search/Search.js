/** @jsxImportSource @emotion/react */
import SearchInput from "./Items/SearchInput";
import SearchIcon from "./Items/SearchIcon";
import {useCommunitySelectorStore} from "../CommunitySelector";
import {search_input_active, search_input_container} from "../../../styles/community_selector_styles";


const Search = () => {
    const {open} = useCommunitySelectorStore();
    return (
        <div css={[search_input_container, open && search_input_active]}>
            <SearchIcon/>
            <SearchInput/>
        </div>
    );
};



export default Search;
