/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React, {useCallback, useState} from 'react';
import {useUserStore} from "../../../../../../store/UserStore/UserStoreProvider";
import DescriptionContainer from "../../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../../ModulesItems/Field/Description";
import ToggleFormButton from "../../../../ModulesItems/ToggleFormButton";
import EmailForm from "./EmailForm";

const ChangeEmail = () => {
    const {user} = useUserStore();
    const [visible, setVisible] = useState(false);
    const toggleForm = useCallback(event =>  {
        setVisible(prevState => !prevState)
    }, []);
    const closeForm = useCallback(event =>  {
        setVisible(false)
    }, []);
    return (
        <div css={[container]}>
            <DescriptionContainer>
                <DescriptionHeading>Email Address</DescriptionHeading>
                <Description>{user.email}</Description>
            </DescriptionContainer>
            <ToggleFormButton
                onClick={toggleForm}
            >
                CHANGE
            </ToggleFormButton>
            {visible && <EmailForm visible={visible} closeForm={closeForm}/>}
        </div>
    );
};
const container = css`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 32px;
  label: change-email
`

export default ChangeEmail;
