/** @jsxImportSource @emotion/react */
import {
    markdown_description_span,
    post_textarea,
    post_textarea_container,
    post_textarea_container_active
} from "../../../styles/fields_styles";
import {createPostStoreActions, usePostDispatch, usePostStore} from "../../../../../store/CreatePostStoreProvider";
import TextareaAutosize from "react-textarea-autosize";
import {markdown_description_container} from "../../../styles/fields_styles";
import {useState} from "react";
const {updatePostContent} = createPostStoreActions

const PostForm = () => {
    const [focused, setFocused] = useState(false);
    const postDispatch = usePostDispatch();
    const {postContent} = usePostStore();
    const handleChange = (event) => {
        postDispatch({type: updatePostContent, payload: {userInput: event.target.value}});
    }

    return (
        <div css={[post_textarea_container, focused && post_textarea_container_active]}>
            <div css={markdown_description_container}>
                <span css={markdown_description_span}>
                    Markdown
                </span>
            </div>
            <TextareaAutosize
                css={[post_textarea]}
                onChange={handleChange}
                value={postContent}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                minRows={6}
                rows={4}
                placeholder="Text (optional)"
            />
        </div>
    );
}

export default PostForm