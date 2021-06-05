/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef, useState} from "react";
import {validateImage} from "../../../../../../utils/validateImage";
import {createPostStoreActions, usePostDispatch, usePostStore} from "../../../../../../store/CreatePostStoreProvider";
import FileSelect from "./FileSelect";
import FilePreview from "./FilePreview";

const {updateImageContent, clearImageContent} = createPostStoreActions

const ImageForm = () => {
    const fileInputRef = useRef(null);
    const {imageDataUrl} = usePostStore();
    // TODO: Check it more in-depth
    // https://stackoverflow.com/questions/7110353/html5-dragleave-fired-when-hovering-a-child-element
    const [dragInCounter, setDragInCounter] = useState(0);
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
        setDragInCounter(0);
        if (!isImage) {
            // TODO: Implement error message for users
            return;
        }
        postDispatch({type: updateImageContent, payload: {imageFile: file, imageDataUrl}});

    };
    const clearFileHandler = (event) => {
        postDispatch({type: clearImageContent});
    }
    const handleDragOver = (event) => {
        console.log('dragging')
        // To allow drop
        // preventing the default behaviour of the browser opening a new window with the dropped file
        event.preventDefault();
    }
    return (
        <div
            css={[drag_container, dragInCounter && drag_inside]}
            onDrop={fileDropHandler}
            onDragOver={handleDragOver}
            onDragEnter={() => setDragInCounter(prevState => prevState + 1)}
            onDragLeave={() => setDragInCounter(prevState => prevState - 1)}
        >
            {!imageDataUrl && <input
                ref={fileInputRef}
                onChange={fileSelectHandler}
                css={fileInput}
                id="file-upload"
                type="file"
                accept="image/png,image/gif,image/jpeg"
            />}
            {!imageDataUrl && !dragInCounter && <FileSelect fileInputRef={fileInputRef}/>}
            {imageDataUrl && <FilePreview imageDataUrl={imageDataUrl} clearFileHandler={clearFileHandler}/>}
        </div>
    )
}

const drag_container = theme => css`
  display: flex;
  border: 1px dashed ${theme.border1};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 280px;
  max-height: 700px;
`
const drag_inside = theme => css`
  border: 1px dashed ${theme.colorGlobal};
`
const fileInput = css`
  display: none;
`



export default ImageForm