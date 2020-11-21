/** @jsx jsx */
import {useState} from 'react';
import DescriptionContainer from "../../../../SettingView/Items/Field/DescriptionContainer";
import Heading from "../../../../SettingView/Items/Field/Heading";
import Description from "../../../../SettingView/Items/Field/Description";
import ToggleFormButton from "../../../../SettingView/Items/Button";
import PasswordForm from "./PasswordForm";
import {css, jsx} from "@emotion/core";

const ChangePassword = () => {
    const [visible, setVisible] = useState(false);
    const toggleForm = () =>  setVisible(prevState => !prevState)
    const closeForm = () => setVisible(false);
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            return toggleForm();
        }
    }
    return (
        <div css={css`margin-bottom: 64px; display: flex`}>
            <DescriptionContainer>
                <Heading>Change password</Heading>
                <Description>Password must be at least 6 characters long</Description>
            </DescriptionContainer>
            <ToggleFormButton
                onMouseDown={toggleForm}
                onKeyDown={handleKeyDown}>
                CHANGE
            </ToggleFormButton>
            {visible && <PasswordForm visible={visible} closeForm={closeForm}/>}
        </div>
    );
};

export default ChangePassword;