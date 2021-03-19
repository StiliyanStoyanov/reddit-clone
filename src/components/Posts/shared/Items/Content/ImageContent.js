/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ImageContent = ({content}) => {
    return (
        <img css={imgStyle} src={content} alt="Not Found"/>
    );
};

const imgStyle = css`
  max-height: 380px;
  margin-top: 8px;
  display: block;
  width: 100%;
  object-fit: cover;
`

export default ImageContent;
