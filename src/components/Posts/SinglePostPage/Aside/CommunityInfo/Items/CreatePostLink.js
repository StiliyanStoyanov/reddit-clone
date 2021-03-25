/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const CreatePostLink = () => {
    return (
        <Link css={[link]} to={"/create-post"}>
            <span css={[span]}>Create Post</span>
        </Link>
    );
};

const link = theme => css`
  width: 100%;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${theme.singlePost.buttonBackground};
  label: community-info-post-link
`
const span = theme => css`
 color: ${theme.singlePost.buttonTextColor};
  label: community-info-post-link-span
`

export default CreatePostLink;
