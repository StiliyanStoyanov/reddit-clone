/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useRef} from "react";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";
import {validateImage} from "../../../../utils/validateImage";

const ImageContent = () => {
    const theme = useTheme();
    const fileInputRef = useRef(null);
    const {imageFile, imageDataUrl} = usePostStore();
    const postDispatch = usePostDispatch();


    const fileSelectHandler = async (event) => {
        const file = event.target.files[0];
        const {validImage, imageDataUrl} = await validateImage(file).catch(err => console.error(err)) || {};
        if (!validImage) {
            // TODO: Implement error message for users
            return false;
        }
        postDispatch({type: "CHANGE_IMAGE_CONTENT", payload: {file, imageDataUrl}});
    }
    const fileDropHandler = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer?.files[0];
        const {validImage, imageDataUrl} = await validateImage(file).catch(err => console.error(err)) || {};
        if (!validImage) {
            // TODO: Implement error message for users
            return false;
        }
        postDispatch({type: "CHANGE_IMAGE_CONTENT", payload: {file, imageDataUrl}});
    };
    const clearFileHandler = (event) => {
        postDispatch({type: "CLEAR_IMAGE_CONTENT"});
    }
    const allowDrop = (event) => {
        event.preventDefault();
    }
    return (
        <div css={container(theme)} onDrop={fileDropHandler} onDragOver={allowDrop}>
            <input
                ref={fileInputRef}
                onChange={fileSelectHandler}
                css={uploadInput}
                id="file-upload"
                type="file"
                accept="image/png,image/gif,image/jpeg"
            />
            {!imageDataUrl &&
            <p css={css`width: 100%; margin: 0; text-align: center`}>
                Drag and drop images or
                <button css={uploadButton} onClick={() => fileInputRef.current.click()}>Upload</button>
            </p>}
            {imageFile &&
            <span css={span(imageDataUrl)}>
                <button onClick={clearFileHandler} css={button}>X</button>
            </span>}
        </div>
    )
}

const container = theme => css`
 position: relative;
 display: flex;
 border: 1px dashed ${theme.createPost.borderColor};
 border-radius: 4px;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 168px;
`
const uploadInput = css`
 width: 100%;
 height: 100%;
 display: none;
`
const uploadButton = css`
  border: 1px solid white;
  margin-left: 8px;
  border-radius: 4px;
  font-weight: 600;
  padding: 3px 6px;
  &:focus {
    border-color: red;
  }
`
const span = (imageDataUrl) => css`
  background-image: url("${imageDataUrl}");
  display:block; position: relative;
  background-size: cover;
  background-position: 50%;
  width: 84px; height: 84px;
  border: 2px solid white;
  border-radius: 4px;
  &:hover button {
    display: block
  }
`
const button = css`
  position: absolute; 
  top: 0; 
  right: 0;
  display: none;
`

export default ImageContent