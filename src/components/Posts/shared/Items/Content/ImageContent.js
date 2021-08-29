/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ImageContent = ({src, className = null}) => {
    return <img src={src} css={img_style} alt="not-found" className={className}/>
};

const img_style = css`
  display: block;
  max-height: 500px;
  width: 100%;
  margin-top: 8px;
`

export default ImageContent;
