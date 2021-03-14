/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import DropdownLinkItem from "../../DropdownItems/DropdownLinkItem";

const CreatePostLink = (props) => {
    return (
        <DropdownLinkItem
            to={"/create-post"}
            {...props}
        >
            <DropdownItemIcon icon={faEdit}/>
            <span css={descriptionSpan}>Create Post</span>
        </DropdownLinkItem>
    );
}

const descriptionSpan = css`
  font-size: 0.9rem;
  padding: 10px 0;
`


export default CreatePostLink