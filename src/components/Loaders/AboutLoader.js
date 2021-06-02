/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./styles/animation_style";

const AboutLoader = () => {
    return (
        <div css={[main_container]}>
            <div css={[animation, header_box]}/>
            <div css={[image_title_container]}>
                <div css={[animation, image_box]}/>
                <div css={[animation, title_box]}/>
            </div>
            <div css={[animation, about_box]}/>
            <div css={[animation, bottom_box]}/>
            <div css={[animation, bottomButtonBox]}/>
        </div>
    );
}
const main_container = theme => css`
  background-color: ${theme.backgroundLoader};
  padding: 12px;
  width: 350px;
  border-radius: 4px;
  label: loader-container
`
const image_title_container = css`
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  label: image-title-container
`
const header_box = css`
  height: 40px;
  width: 60%;
  margin-bottom: 12px;
  label: -header-box;
`
const image_box = css`
  width: 54px;
  height: 54px;
  margin-right: 8px;
  border-radius: 50%;
  label: -image-box;
`
const title_box = css`
  width: 35%;
  height: 22px;
  margin-bottom: 8px;
  label: -title-box;
`
const about_box = css`
  height: 80px;
  width: 100%;
  margin-bottom: 8px;
  label: -about-box;
`
const bottom_box = css`
  height: 25px;
  margin: 4px 0;
  width: 60%;
  label: -bottom-box;
`
const bottomButtonBox = css`
  height: 25px;
  margin: 4px 0;
  width: 100%;
  label: -bottom-button-box;
`

export default AboutLoader;
