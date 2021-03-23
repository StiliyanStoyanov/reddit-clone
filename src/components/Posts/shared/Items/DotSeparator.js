/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DotSeparator = () => {
    return (
        <div css={container}>
            <span css={dot}/>
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  margin: 0 4px;
`
const dot = css`
  border-radius: 50%;
  background-color: #a5a6a8;
  width: 2px;
  height: 2px;
`

export default DotSeparator;
