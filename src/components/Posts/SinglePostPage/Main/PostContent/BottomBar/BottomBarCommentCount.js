/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";

// TODO: Upgrade placeholders
const BottomBarCommentCount = () => {
    return (
        <div css={[container]}>
            <FontAwesomeIcon icon={faCommentAlt}/>
            <span css={[span]}>90 Comments</span>
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  cursor: default
`
const span = css`
  padding: 0 4px 5px;
  label: comment-count-spv
`

export default BottomBarCommentCount
