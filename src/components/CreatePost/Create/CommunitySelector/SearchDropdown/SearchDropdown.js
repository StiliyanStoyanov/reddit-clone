/** @jsxImportSource @emotion/react */
import SubscriptionsList from "./Items/SubscriptionsList";
import OthersList from "./Items/OthersList";
import {useCommunitySelectorStore} from "../CommunitySelector";
import NoMatches from "./Items/NoMatches";
import {search_dropdown_active, search_dropdown_container} from "../../../styles/community_selector_styles";
import Suggest from "./Items/Suggest";
import SelectorSpinner from "./Items/SelectorSpinner";

const SearchDropdown = () => {
    const {open, userInput, subscriptions, others, isFetching} = useCommunitySelectorStore();
    const noBase = subscriptions.length === 0 && others.length === 0 && !isFetching;
    const noMatches = noBase && userInput
    const suggest = noBase && !userInput
    return (
        <div css={[search_dropdown_container, open && search_dropdown_active]}>
            {isFetching && <SelectorSpinner/>}
            {noMatches && <NoMatches/>}
            {suggest && <Suggest/>}
            <SubscriptionsList/>
            <OthersList/>
        </div>
    );
};export default SearchDropdown;
