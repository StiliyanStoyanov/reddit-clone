/** @jsxImportSource @emotion/react */
import {link_text_area} from "../../../styles/fields_styles";
import {postStoreActionTypes, usePostDispatch, usePostStore} from "../../../../../store/PostStoreProvider";

const {updateLinkContent} = postStoreActionTypes

const LinkContent = () => {
    const postDispatch = usePostDispatch();
    const {linkContent} = usePostStore();
    const handleChange = (event) => {
        postDispatch({type: updateLinkContent, payload: {userInput: event.target.value}});
    }


    return (
        <textarea
            css={[link_text_area]}
            onChange={handleChange}
            value={linkContent}
            name="urlLink"
            id="urlLink"
            rows="1"
            placeholder="Url"
        />
    )
}

export default LinkContent