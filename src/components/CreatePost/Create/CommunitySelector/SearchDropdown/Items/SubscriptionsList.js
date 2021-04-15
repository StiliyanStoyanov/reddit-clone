/** @jsxImportSource @emotion/react */
import {useCommunitySelectorDispatch, useCommunitySelectorStore} from "../../CommunitySelector";
import React from "react";
import {
    ul,
    list_heading,
    li,
    li_image,
    li_community_subs,
    li_community_name
} from "../../../../styles/community_selector_styles";

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
                    <li
                        css={li}
                        ref={el => addToRefs(el, subscription)}
                        key={subscription.id}
                        onMouseEnter={setHighlight}
                    >
                        <img css={li_image} src={subscription.imageUrl} alt="Whoops"/>
                        <div>
                            <div css={li_community_name}>e/{subscription.id}</div>
                            <div css={li_community_subs}>{subscription.subscribers.toLocaleString()} members</div>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default SubscriptionsList;
