/** @jsxImportSource @emotion/react */
import React from "react";
import {useCommunitySelectorDispatch, useCommunitySelectorStore} from "../../CommunitySelector";
import {
    li,
    li_community_name,
    li_community_subs,
    li_image,
    list_heading,
    ul
} from "../../../../styles/community_selector_styles";

const OthersList = () => {
    const {others} = useCommunitySelectorStore();
    const {addToRefs, highlightMethods} = useCommunitySelectorDispatch();
    const {setHighlight, clearHighlight} = highlightMethods

    if (others.length === 0) {
        return null;
    }
    return (
        <>
            <h4 css={list_heading}>Others</h4>
            <ul
                css={ul}
                onMouseLeave={clearHighlight}
            >
                {others.map(community =>
                    <li
                        css={li}
                        key={community.id}
                        ref={ref => addToRefs(ref, community)}
                        onMouseEnter={setHighlight}
                    >
                        <img css={li_image} src={community.imageUrl} alt="Whoops"/>
                        <div>
                            <div css={li_community_name}>e/{community.id}</div>
                            <div css={li_community_subs}>{community.subscribers.toLocaleString()} members</div>
                        </div>
                    </li>
                )}
            </ul>
        </>
    );
};

export default OthersList;
