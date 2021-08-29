/** @jsxImportSource @emotion/react */
import {useCommunitySelectorDispatch, useCommunitySelectorStore} from "../../CommunitySelector";
import React from "react";
import {
    ul,
    list_heading,
} from "../../../../styles/community_selector_styles";
import ListItem from "./ListItem";

const SubscriptionsList = () => {
    const {subscriptions} = useCommunitySelectorStore();
    const {addToRefs, highlightMethods} = useCommunitySelectorDispatch();
    const {setHighlight, clearHighlight} = highlightMethods

    if (subscriptions.length === 0) {
        return null;
    }
    return (
        <>
            <h4 css={list_heading}>My Communities</h4>
            <ul
                css={ul}
                onMouseLeave={clearHighlight}
            >
                {subscriptions.map(subscription =>
                    <ListItem
                        key={subscription.id}
                        community={subscription}
                        setHighlight={setHighlight}
                        addToRefs={addToRefs}
                    />
                )}
            </ul>
        </>
    );
};

export default SubscriptionsList;
