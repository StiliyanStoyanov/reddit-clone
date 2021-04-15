/** @jsxImportSource @emotion/react */
import {post_text_area} from "../../../styles/fields_styles";
import {postStoreActionTypes, usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";
const {updatePostContent} = postStoreActionTypes

const PostContent = () => {
    const postDispatch = usePostDispatch();
    const {postContent} = usePostStore();
    const handleChange = (event) => {
        postDispatch({type: updatePostContent, payload: {userInput: event.target.value}});
    }


    return (
        <textarea
            css={[post_text_area]}
            onChange={handleChange}
            value={postContent}
            name="postContent"
            id="postContent"
            rows="10"
            placeholder="Text (optional)"
        />
    )
}

export default PostContent