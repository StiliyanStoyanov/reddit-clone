/** @jsxImportSource @emotion/react */
import React from "react";
import {useCommunitySelectorDispatch, useCommunitySelectorStore} from "../../CommunitySelector";
import {
    list_heading,
    ul
} from "../../../../styles/community_selector_styles";
import ListItem from "./ListItem";

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
                    <ListItem
                        key={community.id}
                        community={community}
                        setHighlight={setHighlight}
                        addToRefs={addToRefs}
                    />
                )}
            </ul>
        </>
    );
};

export default OthersList;
