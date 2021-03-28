/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import BottomBarCommentCount from "./BottomBarCommentCount";

// TODO: Upgrade placeholders
const BottomBar = () => {
    return (
        <div css={[container]}>
            <BottomBarCommentCount/>
        </div>
    );
};

const container = theme => css`
  max-width: 600px;
  margin: 0 auto;
  padding: 8px;
  label: bottom-container-spv
`

export default BottomBar;
