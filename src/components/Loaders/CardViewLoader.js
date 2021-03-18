/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {animation} from "./loadersAnimation";

const CardViewLoader = () => {
    const {loaders} = useTheme();
    return (
        <div css={mainContainer(loaders)}>
            <div css={css([animation(loaders), infoBox])}/>
            <div css={css([animation(loaders), titleBox])}/>
            <div css={css([animation(loaders), contentBox])}/>
            <div css={css([animation(loaders), bottomBox])}/>
        </div>
    );
}

const mainContainer = theme => css`
  background-color: ${theme.containerBackground};
  margin: 10px auto;
  max-width: 700px;
  width: 100%;
  border-radius: 4px;
  padding: 8px 10px 8px 20px;
`
const infoBox = css`
  max-width: 220px;
  width: 100%;
  height: 12px;
  margin-bottom: 12px;
  label: info-box;
`
const titleBox = css`
  max-width: 320px;
  width: 100%;
  height: 20px;
  margin-bottom: 8px;
  label: title-box;
`
const contentBox = css`
  height: 400px;
  width: 100%;
  margin-bottom: 8px;
  label: content-box;
`

const bottomBox = css`
  height: 16px;
  max-width: 160px;
  width: 100%;
  margin-bottom: 8px;
  label: bottom-box;
`

export default CardViewLoader;
