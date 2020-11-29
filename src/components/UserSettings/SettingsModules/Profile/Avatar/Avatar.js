/** @jsx jsx */
import Label from "../../../SettingView/Items/Label";
import {css, jsx} from "@emotion/core";
import DescriptionContainer from "../../../SettingView/Items/Field/DescriptionContainer";
import Heading from "../../../SettingView/Items/Field/Heading";
import Description from "../../../SettingView/Items/Field/Description";

const Avatar = () => {
    return (
        <div css={css`display: block;`}>
            <Label>Avatar</Label>
            <DescriptionContainer>
                <Heading>Choose your avatar</Heading>
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

