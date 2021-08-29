/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../ModulesItems/SubPanelHeading"
import DescriptionContainer from "../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../ModulesItems/Field/DescriptionHeading";
import Description from "../../ModulesItems/Field/Description";


const ContentPreferences = () => {
    return (
        <div>
            <SubPanelHeading>Content preferences</SubPanelHeading>
            <DescriptionContainer>
                <DescriptionHeading>Preferred content sort</DescriptionHeading>
                <Description>Choose how you would like content organized.</Description>
            </DescriptionContainer>
            <DescriptionContainer>
                <DescriptionHeading>Preferred content view</DescriptionHeading>
                <Description>Choose how you would like content displayed.</Description>
            </DescriptionContainer>
        </div>
    );
};
const textarea = theme => css`
  width: 100%;
  background-color: transparent;
  padding: 8px;
  margin-bottom: 8px;
  color: ${theme.colorGlobal};
  border-color: ${theme.border1};
  &:focus-visible {
    outline: 0;
    border-color: ${theme.colorHighlight1};
  }
  border-radius: 4px;
  resize: vertical;
  min-height: 22px
`

export default ContentPreferences;

