import React from "react";
import ContentTypeSelectorIcon from "./ContentTypeSelectorIcon";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import styled from "@emotion/styled";
import {usePostDispatch, usePostStore} from "../../../../store/PostStoreProvider";

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
                <ContentTypeText>Post</ContentTypeText>
            </SelectButton>

            <SelectButton onClick={changeFormType('image')} selected={isFormSelected('image', selectedFormType)}>
                <ContentTypeSelectorIcon icon={faImage}/>
                <ContentTypeText>Image</ContentTypeText>
            </SelectButton>

            <SelectButton onClick={changeFormType('link')} selected={isFormSelected('link', selectedFormType)}>
                <ContentTypeSelectorIcon icon={faLink}/>
                <ContentTypeText>Link</ContentTypeText>
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
  background-color: ${({theme}) => theme.navBackgroundColor};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0;
  border-right: 1px solid #343536;
  border-bottom: ${({selected}) => selected ? '2px solid white' : '1px solid #343536'};
  &:hover {
    background-color: #242425;
  }
  &:focus {
    outline: none;
    background-color: #242425;
  }
  &:active {
    background: #242425;
    -webkit-box-shadow: inset 0 0 3px #000000;
    -moz-box-shadow: inset 0 0 3px #000000;
    box-shadow: inset 0 0 3px #000000;
  }
`;

const ContentTypeText = styled.div`
  color: ${({theme}) => theme.color};
`

export default ContentTypeSelector