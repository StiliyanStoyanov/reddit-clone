/** @jsx jsx */
import {css, jsx} from "@emotion/core";

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
