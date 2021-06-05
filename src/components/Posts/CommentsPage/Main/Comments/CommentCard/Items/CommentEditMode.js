/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import TextareaAutosize from "react-textarea-autosize";
import {useEffect, useRef} from "react";
import ButtonOne from "../../../../../../shared/Buttons/ButtonOne";

const CommentEditMode = ({commentBody, handleEditCancel, handleEditConfirm}) => {
    const textareaRef = useRef();

    useEffect(() => {
        textareaRef.current.focus();
    }, []);
    return (
        <>
            <div css={[container]}>
                <TextareaAutosize
                    ref={textareaRef}
                    css={textarea}
                    defaultValue={commentBody}
                />

            </div>
            <ButtonOne shouldRipple={false} onClick={handleEditCancel}>
                <span>Cancel</span>
            </ButtonOne>
            <ButtonOne shouldRipple={false} onClick={handleEditConfirm}>
                <span>Save</span>
            </ButtonOne>
        </>


    );
};
const textarea = theme => css`
  flex-basis: 100%;
  font-size: 14px;
  color: ${theme.color1};
  background-color: transparent;
  border: 0;
  padding: 0 4px;
  border-radius: 2px;
  font-family: inherit;
  overflow: hidden;
  resize: none
`
const container = css`display: flex; flex-flow: row wrap`


export default CommentEditMode;
