/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {link_clear_decoration} from "../../../../../../styles/general_styles";

const CreatePostLink = () => {
    return (
        <Link css={[link]} to={"/submit"}>
            <span css={[span]}>Create Post</span>
        </Link>
    );
};

const link = theme => css`
  width: 100%;
  ${link_clear_decoration};
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${theme.colorHighlight2};
  label: community-info-post-link
`
const span = theme => css`
  color: ${theme.background1};
  label: community-info-post-link-span;
`

export default CreatePostLink;
