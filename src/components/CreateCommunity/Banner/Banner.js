/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Banner = () => {
    return (
        <div css={bannerPlaceholder}/>
    )
}

//TODO: Add banner
const bannerPlaceholder = css`
  display: block;
  width: 200px;
  min-width: 100px;
  min-height: 100%;
  background-color: #333dff;
  @media screen and (max-width: 560px) {
    display: none;
  }
`
export default Banner