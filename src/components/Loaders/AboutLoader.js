/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./loadersAnimation";

const AboutLoader = () => {
    return (
        <div css={[mainContainer]}>
            <div css={[animation, headerBox]}/>
            <div css={[imageTitleContainer]}>
                <div css={[animation, imageBox]}/>
                <div css={[animation, titleBox]}/>
            </div>
            <div css={[animation, aboutBox]}/>
            <div css={[animation, bottomBox]}/>
            <div css={[animation, bottomButtonBox]}/>
        </div>
    );
}
const mainContainer = theme => css`
  background-color: ${theme.backgroundLoader};
  padding: 12px;
  max-width: 300px;
  width: 100%;
  border-radius: 4px;
  label: loader-container
`
const imageTitleContainer = css`
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
