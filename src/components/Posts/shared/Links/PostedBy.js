/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {css} from "@emotion/react";
import {TimeAgo} from "../../../shared/TimeAgo/TimeAgo";

const PostedBy = ({author}) => {
    return (
        <div css={container}>
            <span>Posted By</span>
            <Link css={link} to={`/user/${author}`}>
                u/{author}
            </Link>
        </div>
    )
}
const container = theme => css`
  font-size: 12px;
  color: ${theme.color2};
`
const link = css`
  position: relative;
  z-index: 2;
  margin: 3px;
  color: inherit;
`;

export default PostedBy