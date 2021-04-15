/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./loadersAnimation";

const InfoLoader = () => {
    return (
        <div css={[animation, infoBox]}/>
    );
};

const infoBox = css`
  width: 60%;
  height: 20px;
  label: info-box;
`

export default InfoLoader;
