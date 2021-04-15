/** @jsxImportSource @emotion/react */
import {fields_container} from "../../styles/fields_styles";
import Title from "./Title/Title";
import LinkContent from "./Content/LinkContent";
import ImageContent from "./Content/ImageContent/ImageContent";
import PostContent from "./Content/PostContent";
import {usePostStore} from "../../../../store/PostStoreProvider";

const Fields = () => {
    const {activeForm} = usePostStore();
    return (
        <div css={[fields_container]}>
            <Title/>
            {activeForm === 'post' && <PostContent/>}
            {activeForm === 'image' && <ImageContent/>}
            {activeForm === 'link' && <LinkContent/>}
        </div>
    );
};


export default Fields;
