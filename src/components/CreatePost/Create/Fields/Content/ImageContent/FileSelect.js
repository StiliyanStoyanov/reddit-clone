/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const FileSelect = ({fileInputRef}) => {
    return (
        <p css={p}>
            Drag and drop images or
            <button css={[button]} onClick={() => fileInputRef.current.click()}>Upload</button>
        </p>
    );
};

const p = css`
  width: 100%;
  margin: 0;
  text-align: center
`
const button = css`
  border: 1px solid white;
  margin-left: 8px;
  border-radius: 4px;
  font-weight: 600;
  padding: 3px 6px;

  &:focus {
    border-color: red;
  }
`

export default FileSelect;
