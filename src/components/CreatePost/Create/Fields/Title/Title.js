/** @jsxImportSource @emotion/react */
import {postStoreActionTypes, usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";
import {title_text_area} from "../../../styles/fields_styles";
import {useRef} from "react";
import {css} from "@emotion/react";

const {updateTitle} = postStoreActionTypes

// About the resize
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
// Should probably check out https://github.com/Andarist/react-textarea-autosize

const Title = () => {
    const textareaRef = useRef();
    const {title} = usePostStore();
    const postDispatch = usePostDispatch();

    const handleChange = (event) => {
        postDispatch({type: updateTitle, payload: {userInput: event.target.value}});
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
    const preventEnter = event => {
        if (event.key === "Enter") event.preventDefault();
    }

    return (
        <div css={titleContainer}>
            <textarea
                ref={textareaRef}
                maxLength={200}
                css={[title_text_area]}
                rows={1}
                onChange={handleChange}
                onKeyDown={preventEnter}
                value={title}
                name="title"
                id="title"
                placeholder="Title"
                spellCheck={false}
            />
            <span
                css={[span]}
            >
                {title.length}/200
            </span>
        </div>
    );
}
const titleContainer = css`
  position: relative;
`
const span = theme => css`
  position: absolute;
  color: ${theme.color2};
  font-size: 12px;
  transform: translate(-10px, 50%);
  right: 0;
`

export default Title