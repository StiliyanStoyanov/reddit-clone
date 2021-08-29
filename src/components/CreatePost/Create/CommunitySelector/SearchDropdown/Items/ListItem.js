/** @jsxImportSource @emotion/react */
import {li, li_community_name, li_community_subs, li_image} from "../../../../styles/community_selector_styles";
import React from "react";

const ListItem = ({community, setHighlight, addToRefs}) => {
    return (
        <li
            css={li}
            key={community.id}
            ref={ref => addToRefs(ref, community)}
            onMouseEnter={setHighlight}
        >
            <img css={li_image} src={community.imageUrl} alt="Whoops"/>
            <div>
                <div css={li_community_name}>e/{community.id}</div>
                <div css={li_community_subs}>{community.subscribers?.toLocaleString() || 0} members</div>
            </div>
        </li>
    );
};

export default ListItem;
