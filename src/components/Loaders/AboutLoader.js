/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {animation} from "./loadersAnimation";

const AboutLoader = () => {
    const {loaders} = useTheme();
    return (
        <div css={[mainContainer(loaders)]}>
            <div css={css([animation(loaders), headerBox])}/>
            <div css={[imagePlusTitleContainer]}>
                <div css={css([animation(loaders), imageBox])}/>
                <div css={css([animation(loaders), titleBox])}/>
            </div>
            <div css={css([animation(loaders), aboutBox])}/>
            <div css={css([animation(loaders), bottomBox])}/>
            <div css={css([animation(loaders), bottomButtonBox])}/>
        </div>
    );
}
const mainContainer = theme => css`
  background-color: ${theme.containerBackground};
  padding: 12px;
  max-width: 300px;
  width: 100%;
  border-radius: 4px;
  label: loader-container
`
const imagePlusTitleContainer = css`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  label: image-title-container
`
const headerBox = css`
  max-width: 200px;
  height: 40px;
  width: 100%;
  margin-bottom: 12px;
  label: -header-box;
`
const imageBox = css`
  width: 54px;
  height: 54px;
  margin-right: 8px;
  border-radius: 50%;
  label: -image-box;
`
const titleBox = css`
  max-width: 110px;
  width: 100%;
  height: 22px;
  margin-bottom: 8px;
  label: -title-box;
`
const aboutBox = css`
  height: 80px;
  width: 100%;
  margin-bottom: 8px;
  label: -about-box;
`

const bottomBox = css`
  height: 25px;
  margin: 4px 0;
  max-width: 200px;
  width: 100%;
  label: -bottom-box;
`
const bottomButtonBox = css`
  height: 25px;
  margin: 4px 0;
  width: 100%;
  label: -bottom-button-box;
`

export default AboutLoader;
