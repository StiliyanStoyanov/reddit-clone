/** @jsxImportSource @emotion/react */
import {useCallback, useState} from 'react';
import {css} from "@emotion/react";
import DescriptionContainer from "../../../../ModulesItems/Field/DescriptionContainer";
import DescriptionHeading from "../../../../ModulesItems/Field/DescriptionHeading";
import Description from "../../../../ModulesItems/Field/Description";
import ToggleFormButton from "../../../../ModulesItems/ToggleFormButton";
import PasswordForm from "./PasswordForm";

const ChangePassword = () => {
    const [visible, setVisible] = useState(false);
    const toggleForm = useCallback(event =>  {
        setVisible(prevState => !prevState)
    }, []);
    const closeForm = useCallback((event) =>  {
        setVisible(false);
    }, []);

    return (
        <div css={[container]}>
            <DescriptionContainer>
                <DescriptionHeading>Change password</DescriptionHeading>
                <Description>Password must be at least 6 characters long</Description>
            </DescriptionContainer>
            <ToggleFormButton
                onClick={toggleForm}
            >
                CHANGE
            </ToggleFormButton>
            <PasswordForm visible={visible} closeForm={closeForm}/>
        </div>
    );
};
const container = css`
  display: flex;
  margin-bottom: 64px;
`

export default ChangePassword;