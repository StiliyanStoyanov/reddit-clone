/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {animation} from "./loadersAnimation";

const InfoLoader = () => {
    const {loaders} = useTheme();
    return (
        <div css={css([animation(loaders), infoBox])}/>
    );
};

const infoBox = css`
  width: 60%;
  height: 20px;
  label: info-box;
`

export default InfoLoader;
