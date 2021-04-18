import React from 'react';
import Dropdown from "../Dropdown";
import CreatePostLink from "./DropdownItems/CreatePostLink";
import CreateCommunityLink from "./DropdownItems/CreateCommunityLink";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

const CreateDropdown = () => {
    return (
        <Dropdown icon={faPlus}>
            <CreatePostLink/>
            <CreateCommunityLink/>
        </Dropdown>
    );
};

export default CreateDropdown;
