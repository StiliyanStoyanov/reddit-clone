/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";

const BottomBarCommentCount = ({commentsCount}) => {
    return (
        <div css={[container]}>
            <FontAwesomeIcon icon={faCommentAlt}/>
            <span css={[span]}>{`${commentsCount} comments`}</span>
        </div>
    );
};

const container = theme => css`
  display: flex;
  color: ${theme.color2};
  align-items: center;
  margin-left: 8px;
  cursor: default;
`
const span =  css`
  display: block;
  padding: 0 4px 4px;
  label: comment-count-spv
`

export default BottomBarCommentCount
