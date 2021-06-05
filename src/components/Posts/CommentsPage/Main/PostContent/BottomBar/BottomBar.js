/** @jsxImportSource @emotion/react */
import BottomBarCommentCount from "./BottomBarCommentCount";
import {Scores} from "../../../../shared/Scores/Scores";
import {useParams} from "react-router";
import {scores_horizontal} from "../../../../../../styles/scores_styles";
import React from "react";
import {flex_align_center} from "../../../../../../styles/general_styles";
import {css} from "@emotion/react";

// TODO: Upgrade placeholders
const BottomBar = ({scores, commentsCount}) => {
    const {communityId, postId} = useParams();
    return (
        <div css={[flex_align_center, css`padding: 8px 0`]}>
            <Scores
                css={[scores_horizontal]}
                initialScores={scores}
                communityId={communityId}
                postId={postId}
            />
            <BottomBarCommentCount commentsCount={commentsCount}/>
        </div>
    );
};


export default BottomBar;
