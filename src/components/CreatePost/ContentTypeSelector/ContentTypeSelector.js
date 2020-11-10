import React from "react";
import ContentTypeSelectorIcon from "./ContentTypeSelectorIcon";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../store/PostStoreProvider";

// TODO: Add Focus Lock At Some Point
const ContentTypeSelector = () => {
    const {selectedFormType} = usePostStore();
    const postDispatch = usePostDispatch();
    const isFormSelected = (currentFormButton, activeFormState) => {
        return currentFormButton === activeFormState;
    };
    const changeFormType = selectedType => e => {
        postDispatch({type: "CHANGE_FORM_TYPE", payload: selectedType});
    }
    return (
        <ContentTypeSelectorContainer>
            <SelectButton onClick={changeFormType('post')} selected={isFormSelected('post', selectedFormType)}>
                <ContentTypeSelectorIcon icon={faFileAlt}/>
                <div>Post</div>
            </SelectButton>

            <SelectButton onClick={changeFormType('image')} selected={isFormSelected('image', selectedFormType)}>
                <ContentTypeSelectorIcon icon={faImage}/>
                <div>Image</div>
            </SelectButton>

            <SelectButton onClick={changeFormType('link')} selected={isFormSelected('link', selectedFormType)}>
                <ContentTypeSelectorIcon icon={faLink}/>
                <div>Link</div>
            </SelectButton>
        </ContentTypeSelectorContainer>
    )
}

const ContentTypeSelectorContainer = styled.div`
  display: flex;
  height: 55px;
  margin-bottom: 12px;
`
const SelectButton = styled.button`
  display: flex;
  cursor: pointer;
  color: ${({theme, selected}) => selected ? theme.createPost.activeColor : theme.createPost.color };
  background-color: ${({theme}) => theme.createPost.backgroundColor};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0;
  border-right: 1px solid ${({theme}) => theme.createPost.borderColor};
  border-bottom: 1px solid ${({selected, theme}) => selected ? theme.createPost.selectedBorderColor : theme.createPost.borderColor};
  &:hover, &:focus {
    outline: none;
    background-color: ${({theme}) => theme.createPost.hoverOverlay}
  }
`;

export default ContentTypeSelector