/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const PostNotFound = () => {

    return (
        <div css={container}>
            <p>Sorry there seems to be nothing here</p>
        </div>
    );
};

const container = css`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export default PostNotFound;
