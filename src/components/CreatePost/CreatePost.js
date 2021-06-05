/** @jsxImportSource @emotion/react */
import {create_post_header, create_post_container} from "./styles/create_post_styles";
import Create from "./Create/Create";

const CreatePost = () => {
    return (
        <div css={[create_post_container]}>
            <h2 css={[create_post_header]}>Create Post</h2>
            <Create/>
        </div>
    );
}

export default CreatePost