/** @jsxImportSource @emotion/react */
import {faEdit} from "@fortawesome/free-solid-svg-icons/faEdit";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import DropdownLink from "../../DropdownItems/DropdownLink";
import DropdownSpan from "../../DropdownItems/DropdownSpan";

const CreatePostLink = () => {
    return (
        <DropdownLink to={"/create-post"}>
            <DropdownIcon icon={faEdit}/>
            <DropdownSpan>Create Post</DropdownSpan>
        </DropdownLink>
    );
}

export default CreatePostLink