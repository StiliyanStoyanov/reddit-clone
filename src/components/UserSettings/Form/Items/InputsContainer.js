/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const InputsContainer = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  margin-top: 20px;
  label: inputs-container;
`

export default InputsContainer;
