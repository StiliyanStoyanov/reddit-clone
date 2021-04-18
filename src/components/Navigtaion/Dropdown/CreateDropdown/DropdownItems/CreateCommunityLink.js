/** @jsxImportSource @emotion/react */
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import DropdownLink from "../../DropdownItems/DropdownLink";
import DropdownSpan from "../../DropdownItems/DropdownSpan";

const CreateCommunityLink = () => {
    return (
        <DropdownLink to={"/create-community"}>
            <DropdownIcon icon={faUsers}/>
            <DropdownSpan>Create Community</DropdownSpan>
        </DropdownLink>
    )
}

export default CreateCommunityLink