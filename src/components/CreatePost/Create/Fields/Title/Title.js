/** @jsxImportSource @emotion/react */
import {createPostStoreActions, usePostDispatch, usePostStore} from "../../../../../store/CreatePostStoreProvider";
import {title_textarea} from "../../../styles/fields_styles";
import {css} from "@emotion/react";
import TextareaAutosize from 'react-textarea-autosize';
const {updateTitle} = createPostStoreActions
// About the resize
// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
// https://github.com/Andarist/react-textarea-autosize

const Title = () => {
    const {title} = usePostStore();
    const postDispatch = usePostDispatch();
    const handleChange = (event) => postDispatch({type: updateTitle, payload: {userInput: event.target.value}});

    return (
        <div css={title_container}>
            <TextareaAutosize
                css={[title_textarea]}
                placeholder="Title"
                rows={1}
                maxLength={200}
                value={title}
                id="title"
                onChange={handleChange}
                spellCheck={false}
            />
            <span css={[span]}>{title.length}/200</span>
        </div>
    );
}
const title_container = css`
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