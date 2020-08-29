import React from "react";
import DropdownContentContainer from "../shared/DropdownContentContainer";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import TopIcon from "../shared/TopIcon";
import CreatePostLink from "./DropdownContent/CreatePostLink";
import CreateCommunityLink from "./DropdownContent/CreateCommunityLink";

const CreateDropdownContent = ({dropdownRef, onClickOutside, open, showHideContent}) => {
    useClickOutside(dropdownRef, onClickOutside, open);
    return (
        <>
            <TopIcon icon={faPlus} showHideContent={showHideContent} open={open}/>
            <DropdownContentContainer open={open}>
                <CreatePostLink/>
                <CreateCommunityLink/>
            </DropdownContentContainer>
        </>

    );
}

export default CreateDropdownContent