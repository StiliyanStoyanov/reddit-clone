/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ImageContent = ({content}) => {
    const openImageInNewTab = event => {
        event.preventDefault();
        if (window) {
            window.open(content, '_blank');
        }
    }
    return (
        <a href={content} onClick={openImageInNewTab} css={container}>
            <img css={image} src={content} alt="not-found"/>
        </a>
    );
};

const container = css`
  &:focus {
    outline-offset: 1px;
  }
`
const image = css`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  max-height: 400px;
  max-width: 600px;
  width: 100%;
  object-fit: cover;
  label: image-content-spv
`

export default ImageContent;
