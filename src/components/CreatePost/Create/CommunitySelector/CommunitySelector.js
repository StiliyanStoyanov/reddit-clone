/** @jsxImportSource @emotion/react */
import {createContext, memo, useContext} from "react";
import Search from "./Search/Search";
import SearchDropdown from "./SearchDropdown/SearchDropdown";
import useCommunitySelector from "../../../../hooks/useCommunitySelector/useCommunitySelector";
import {community_selector_container} from "../../styles/community_selector_styles";

const communitySelectorContext = createContext({});
const communitySelectorDispatchContext = createContext({});
const CommunitySelector = memo(() => {
    const {state, methods} = useCommunitySelector();
    return (
        <div css={[community_selector_container]}>
            <communitySelectorContext.Provider value={state}>
                <communitySelectorDispatchContext.Provider value={methods}>
                    <Search/>
                    <SearchDropdown/>
                </communitySelectorDispatchContext.Provider>
            </communitySelectorContext.Provider>
        </div>
    );
});
export const useCommunitySelectorStore = () => {
    return useContext(communitySelectorContext);
}
export const useCommunitySelectorDispatch = () => {
    return useContext(communitySelectorDispatchContext);
}

export default CommunitySelector
