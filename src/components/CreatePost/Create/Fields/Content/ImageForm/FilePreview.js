/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";

const FilePreview = ({imageDataUrl, clearFileHandler}) => {
    return (
        <div css={div}>
            <img draggable={false} css={img} src={imageDataUrl} alt="Whoops"/>
            <button onClick={clearFileHandler} css={clearButton}>
                <FontAwesomeIcon icon={faTimes}/>
            </button>
        </div>
    );
};

const div = css`
  position: relative;
  pointer-events: none;
  user-select: none;
`
const img = css`
  display: block;
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`
const clearButton = theme => css`
  position: absolute;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: ${theme.background1};
  border-radius: 50%;
  height: 18px;
  width: 18px;
  border: 0;
  top: 4px;
  right: 4px;
  pointer-events: auto;
  svg {
    font-size: 12px;
    color: ${theme.color1};
  }
`

export default FilePreview;
