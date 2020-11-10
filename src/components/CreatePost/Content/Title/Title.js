/** @jsx jsx */
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Title = () => {
    const theme = useTheme();
    const {title} = usePostStore();
    const postDispatch = usePostDispatch();
    const changeTitle = (event) => {
        postDispatch({type: "CHANGE_TITLE", payload: event.target.value});
    }
    return (
        <div>
            <textarea css={titleTextAreaStyle(theme)} onChange={changeTitle} value={title} name="title" id="title" placeholder="Title" spellCheck={false}/>
        </div>
    );
}

const titleTextAreaStyle = theme => css`
  resize: none;
  outline: none;
  color: ${theme.color};
  width: 100%;
  border-color: ${theme.createPost.borderColor};
  border-radius: 4px;
  background-color: ${theme.createPost.backgroundColor};
  height: 33px;
  padding: 8px 68px 8px 16px;
  &:focus {
    border-color: ${theme.createPost.borderColorOnFocus};
  }
  overflow-y: hidden;
  overflow-wrap: break-word;
  white-space: pre-wrap;
`

export default Title