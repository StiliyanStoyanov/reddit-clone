/** @jsxImportSource @emotion/react */
import {link_textarea} from "../../../styles/fields_styles";
import {createPostStoreActions, usePostDispatch, usePostStore} from "../../../../../store/CreatePostStoreProvider";
import TextareaAutosize from "react-textarea-autosize";
const {updateLinkContent} = createPostStoreActions

const LinkForm = () => {
    const postDispatch = usePostDispatch();
    const {linkContent} = usePostStore();
    const handleChange = (event) => {
        postDispatch({type: updateLinkContent, payload: {userInput: event.target.value}});
    }

    return (
        <TextareaAutosize
            css={[link_textarea]}
            onChange={handleChange}
            value={linkContent}
            maxRows={1}
            rows={1}
            placeholder="Url"
        />
    )
}

export default LinkForm