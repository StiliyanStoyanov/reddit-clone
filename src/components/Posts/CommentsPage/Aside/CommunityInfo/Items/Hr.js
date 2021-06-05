/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Hr = () => {
    return (
        <hr css={[hr]}/>
    );
};

const hr = css`
  background-color: #343536;
  border: none;
  height: 1px;
  margin: 12px 0;
  label: community-info-hr
`

export default Hr;
