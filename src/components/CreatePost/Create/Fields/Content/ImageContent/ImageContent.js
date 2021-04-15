/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef, useState} from "react";
import {validateImage} from "../../../../../../utils/validateImage";
import {postStoreActionTypes, usePostDispatch, usePostStore} from "../../../../../../store/PostStoreProvider";
import FileSelect from "./FileSelect";
import FilePreview from "./FilePreview";

const {updateImageContent, clearImageContent} = postStoreActionTypes

const ImageContent = () => {
    const fileInputRef = useRef(null);
    const {imageDataUrl} = usePostStore();
    const [fileDragIn, setFileDragIn] = useState(false);
    const postDispatch = usePostDispatch();

    const fileSelectHandler = async (event) => {
        const file = event.target.files[0];
        const {isImage, imageDataUrl} = await validateImage(file).catch(err => console.error(err)) || {isImage:false, imageDataUrl: null};
        if (!isImage) {
            // TODO: Implement error message for users
            return false;
        }
        postDispatch({type: updateImageContent, payload: {imageFile: file, imageDataUrl}});
    }
    const fileDropHandler = async (event) => {
        event.preventDefault();
        const file = event.dataTransfer?.files[0];
        const {isImage, imageDataUrl} = await validateImage(file).catch(err => console.error(err)) || {isImage:false, imageDataUrl: null};
        if (!isImage) {
            // TODO: Implement error message for users
            return false;
        }
        postDispatch({type: updateImageContent, payload: {imageFile: file, imageDataUrl}});
    };
    const clearFileHandler = (event) => {
        setFileDragIn(false);
        postDispatch({type: clearImageContent});
    }
    const handleDragOver = (event) => {
        // To allow drop
        // preventing the default behaviour of the browser opening a new window with the dropped file
        event.preventDefault();
    }
    return (
        <div
            css={[dragContainer, fileDragIn && dragInside]}
            onDrop={fileDropHandler}
            onDragOver={handleDragOver}
            onDragEnter={() => setFileDragIn(true)}
            onDragLeave={() => setFileDragIn(false)}
        >
            <input
                ref={fileInputRef}
                onChange={fileSelectHandler}
                css={fileInput}
                id="file-upload"
                type="file"
                accept="image/png,image/gif,image/jpeg"
            />
            {!imageDataUrl && !fileDragIn && <FileSelect fileInputRef={fileInputRef}/>}
            {imageDataUrl && <FilePreview imageDataUrl={imageDataUrl} clearFileHandler={clearFileHandler}/>}
        </div>
    )
}

const dragContainer = theme => css`
  position: relative;
  display: flex;
  border: 1px dashed ${theme.border1};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 280px;
  max-height: 700px;
`
const dragInside = theme => css`
  border: 1px dashed ${theme.colorGlobal};
`
const fileInput = css`
  display: none;
`



export default ImageContent