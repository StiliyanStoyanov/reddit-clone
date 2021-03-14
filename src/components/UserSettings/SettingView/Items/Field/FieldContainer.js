/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const FieldContainer = ({children}) => {
    return (
        <div css={container}>
            {children}
        </div>
    );
};

const container = css`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 32px;
`

export default FieldContainer;
