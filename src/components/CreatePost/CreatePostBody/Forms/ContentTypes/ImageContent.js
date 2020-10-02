/* eslint-disable no-unused-vars */
/** @jsx jsx */
import {useRef} from "react";
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";
import {validateImage} from "../../../../../utils/validateImage";

const ImageContent = () => {
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
    const span = css`
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
    return (
        <ImageContentContainer onDrop={fileDropHandler} onDragOver={allowDrop}>
            <input
                ref={fileInputRef}
                onChange={fileSelectHandler}
                css={uploadInputCss}
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
            <span css={span}>
                <button onClick={clearFileHandler} css={button}>X</button>
            </span>}
        </ImageContentContainer>
    )
}
/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const ImageContentContainer = styled.div`
 position: relative;
 display: flex;
 border: 1px dashed #343536;
 border-radius: 4px;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 168px;
`

const uploadInputCss = css`
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

export default ImageContent