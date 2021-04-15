/** @jsxImportSource @emotion/react */
import SubscriptionsList from "./Items/SubscriptionsList";
import OthersList from "./Items/OthersList";
import {useCommunitySelectorStore} from "../CommunitySelector";
import NoMatches from "./Items/NoMatches";
import {search_dropdown_active, search_dropdown_container} from "../../../styles/community_selector_styles";

const SearchDropdown = () => {
    const {open, subscriptions, others, isFetching, isLoading} = useCommunitySelectorStore();
    const noMatches = subscriptions.length === 0 && others.length === 0;
    return (
        <div css={[search_dropdown_container, open && search_dropdown_active]}>
            {noMatches && <NoMatches isFetching={isFetching} isLoading={isLoading}/>}
            <SubscriptionsList/>
            <OthersList/>
        </div>
    );
};
export default SearchDropdown;
