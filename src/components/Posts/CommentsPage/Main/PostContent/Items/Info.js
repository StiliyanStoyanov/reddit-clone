/** @jsxImportSource @emotion/react */
import CommunityLink from "../../../../shared/Links/CommunityLink";
import DotSeparator from "../../../../shared/Items/DotSeparator";
import PostedBy from "../../../../shared/Links/PostedBy";
import {flex_align_center} from "../../../../../../styles/general_styles";
import {
    TimeAgo,
    TimeAgoPopup,
    time_ago_media_query,
    time_ago_popup_one
} from "../../../../../shared/TimeAgo/TimeAgo";
import {css} from "@emotion/react";
import {animation} from "../../../../../Loaders/styles/animation_style";
import React from "react";

const Info = ({communityName, title, communityImageUrl, author, createdAt, isLoading}) => {
    return (
        <div css={container}>
            {isLoading && <div css={[animation, css`width: 50%; height: 30px`]}/>}
            <CommunityLink
                name={communityName}
                imageUrl={communityImageUrl}
            />
            <DotSeparator/>
            <PostedBy author={author}/>
            <TimeAgo css={[time_ago_media_query]} timestamp={createdAt}>
                <TimeAgoPopup timestamp={createdAt} css={time_ago_popup_one}/>
            </TimeAgo>
        </div>
    );
};
const container = css`
  ${flex_align_center};
  white-space: nowrap;
  position: relative; 
  font-size: 12px;
`

export default Info;
