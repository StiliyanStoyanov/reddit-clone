/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const InputsContainer = ({children}) => {
    return (
        <div css={container}>
            {children}
        </div>
    );
};

const container =  css`
 margin-top: 20px;
`

export default InputsContainer;
