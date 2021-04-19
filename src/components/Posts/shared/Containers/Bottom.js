/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const BottomContainer = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  display: flex;
  padding: 4px;
  label: card-bottom
`

export default BottomContainer;
