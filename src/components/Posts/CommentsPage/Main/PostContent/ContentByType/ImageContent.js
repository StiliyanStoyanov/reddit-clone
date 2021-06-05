/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ImageContent = ({content}) => {
    return (
        <a href={content} target="_blank" rel="noreferrer noopener">
            <img css={image} src={content} alt="not-found"/>
        </a>
    );
};

const image = css`
  display: block;
  cursor: pointer;
  max-height: 600px;
  width: 100%;
  label: image-content-spv
`

export default ImageContent;
