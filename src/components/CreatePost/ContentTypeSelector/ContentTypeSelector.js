/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import React from "react";
import ContentTypeSelectorIcon from "./ContentTypeSelectorIcon";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faImage} from "@fortawesome/free-solid-svg-icons/faImage";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import {usePostDispatch, usePostStore} from "../../../store/PostStoreProvider";

// TODO: Add Focus Lock At Some Point
// TODO: Extract buttons into component
const ContentTypeSelector = () => {
    const theme = useTheme();
    const {selectedFormType} = usePostStore();
    const postDispatch = usePostDispatch();
    const isFormSelected = (currentFormButton, activeFormState) => {
        return currentFormButton === activeFormState;
    };
    const changeFormType = selectedType => e => {
        postDispatch({type: "CHANGE_FORM_TYPE", payload: selectedType});
    }
    return (
        <div css={container}>
            <button css={button(theme, isFormSelected('post', selectedFormType))} onClick={changeFormType('post')}>
                <ContentTypeSelectorIcon icon={faFileAlt}/>
                <div>Post</div>
            </button>

            <button css={button(theme, isFormSelected('image', selectedFormType))} onClick={changeFormType('image')}>
                <ContentTypeSelectorIcon icon={faImage}/>
                <div>Image</div>
            </button>

            <button css={button(theme, isFormSelected('link', selectedFormType))} onClick={changeFormType('link')}>
                <ContentTypeSelectorIcon icon={faLink}/>
                <div>Link</div>
            </button>
        </div>
    )
}

const container = css`
  display: flex;
  height: 55px;
  margin-bottom: 12px;
`
const button = (theme, selected) => css`
  display: flex;
  cursor: pointer;
  color: ${selected ? theme.createPost.activeColor : theme.createPost.color };
  background-color: ${theme.createPost.backgroundColor};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0;
  border-right: 1px solid ${theme.createPost.borderColor};
  border-bottom: 1px solid ${selected ? theme.createPost.selectedBorderColor : theme.createPost.borderColor};
  &:hover, &:focus {
    outline: none;
    background-color: ${theme.createPost.hoverOverlay}
  }
`;

export default ContentTypeSelector