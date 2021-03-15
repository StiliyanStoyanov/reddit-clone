/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DescriptionContainer = ({children}) => {
    return (
        <div css={container}>
            {children}
        </div>
    );
};

const container = css`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  max-width: 80%;
`

export default DescriptionContainer;
