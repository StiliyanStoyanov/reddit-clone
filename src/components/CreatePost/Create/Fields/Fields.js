/** @jsxImportSource @emotion/react */
import {fields_container} from "../../styles/fields_styles";
import Title from "./Title/Title";
import LinkForm from "./Content/LinkForm";
import ImageForm from "./Content/ImageForm/ImageForm";
import PostForm from "./Content/PostForm";
import {usePostStore} from "../../../../store/CreatePostStoreProvider";

const Fields = () => {
    const {activeForm} = usePostStore();
    return (
        <div css={[fields_container]}>
            <Title/>
            {activeForm === 'post' && <PostForm/>}
            {activeForm === 'image' && <ImageForm/>}
            {activeForm === 'link' && <LinkForm/>}
        </div>
    );
};


export default Fields;
