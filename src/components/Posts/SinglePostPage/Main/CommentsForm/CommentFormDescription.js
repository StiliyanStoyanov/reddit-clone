/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {Link} from "react-router-dom";

const CommentFormDescription = ({user}) => {
    const {singlePost} = useTheme();

    return (
        <span css={span}>
            Comment as <Link to={`/user/${user.displayName}`} css={a(singlePost)}>
                {user.displayName}
            </Link>
        </span>
    );
};

const span = css`
  display: block;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 0;
`
const a = theme => css`
  cursor: pointer;
  color: ${theme.anchorColor};
  &:hover, &:focus-visible {
    text-decoration: underline;
  }
`

export default CommentFormDescription;
