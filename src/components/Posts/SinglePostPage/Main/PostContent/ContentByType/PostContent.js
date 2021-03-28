/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const PostContent = ({content}) => {
    return (
        <div css={[div]}>
            <p css={css`margin: 0`}>{content}</p>
        </div>
    );
};

const div = theme => css`
  max-height: 600px;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 8px;
  label: post-content-spv
`

export default PostContent;
