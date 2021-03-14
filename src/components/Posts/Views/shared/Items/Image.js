/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
const Image = ({src}) => {
    return (
        <img src={src} alt="NotFount" css={imageStyle}/>
    );
};

const imageStyle = css`
  display: block;
  width: 80px;
  height: 60px;
  border-radius: 4px;
`

export default Image;
