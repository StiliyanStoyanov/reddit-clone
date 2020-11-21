import React, {useState} from 'react';
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import DescriptionContainer from "../../../../SettingView/Items/Field/DescriptionContainer";
import Heading from "../../../../SettingView/Items/Field/Heading";
import Description from "../../../../SettingView/Items/Field/Description";
import ToggleFormButton from "../../../../SettingView/Items/Button";
import Container from "../../../../SettingView/Items/Field/FieldContainer";
import EmailForm from "./EmailForm";

const ChangeEmail = () => {
    const {user} = useUserStore();
    const [visible, setVisible] = useState(false);
    const toggleForm = e =>  setVisible(prevState => !prevState)
    const closeForm = e => setVisible(false);
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            return toggleForm();
        }
    }

    return (
        <Container>
            <DescriptionContainer>
                <Heading>Email Address</Heading>
                <Description>{user.email}</Description>
            </DescriptionContainer>
            <ToggleFormButton
                onMouseDown={toggleForm}
                onKeyDown={handleKeyDown}
            >
                CHANGE
            </ToggleFormButton>
            {visible && <EmailForm visible={visible} closeForm={closeForm}/>}
        </Container>
    );
};

export default ChangeEmail;
