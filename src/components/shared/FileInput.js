/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef} from "react";

const acceptDefault = "image/png, image/jpeg, image/jpg"
const FileInput = ({accept= acceptDefault, handleFileChange, className=null, children}) => {
    const inputRef = useRef();
    return (
        <div>
            <button
                css={button}
                className={className}
                onClick={() => inputRef.current?.click()}
            >
                {children}
            </button>
            <input ref={inputRef} type="file" onChange={handleFileChange} accept={accept}/>
        </div>

    );
};

const button = theme => css`
  position: relative;
  color: ${theme.color1};
  border: 1px solid ${theme.border1};
  padding: 8px;
  margin-left: 8px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  + input {
    display: none;
  }
`
export default FileInput;
