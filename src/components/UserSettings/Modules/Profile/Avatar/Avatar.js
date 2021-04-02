/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import DescriptionContainer from "../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../ModulesItems/Field/Description";

const Avatar = () => {
    return (
        <div css={css`display: block;`}>
            <SubPanelHeading>Avatar</SubPanelHeading>
            <DescriptionContainer>
                <DescriptionHeading>Choose your avatar</DescriptionHeading>
                <Description>Choose an avatar you like to be shown on your profile.</Description>
            </DescriptionContainer>
            <div css={css`margin-top: 8px;`}>
                <div css={css`display: flex`}>
                    <div css={avatarPlaceholder}/>
                    <div css={avatarPlaceholder}/>
                    <div css={avatarPlaceholder}/>
                    <div css={avatarPlaceholder}/>
                    <div css={avatarPlaceholder}/>
                </div>
            </div>
        </div>
    );
};

const avatarPlaceholder = css`
  margin-right: 5px;
  width: 80px;
  height: 80px;
  background-color: cyan;
  
`

export default Avatar;

