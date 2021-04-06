/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import ToggleFormButton from "../../../ModulesItems/ToggleFormButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import {useCallback, useState} from "react";
import DeactivateForm from "./DeactivateForm";

const DeactivateAccount = () => {
    const [visible, setVisible] = useState(false);
    const toggleForm = useCallback(event => {
        setVisible(prevState => !prevState)
    }, []);
    const closeForm = useCallback(event => {
        setVisible(false)
    }, []);

    return (
        <div css={[container]}>
            <SubPanelHeading>Deactivate Account</SubPanelHeading>
            <ToggleFormButton css={[toggleFormButton]} onClick={toggleForm}>
                <FontAwesomeIcon css={[iconCss]} icon={faTrashAlt}/>
                Deactivate Account
            </ToggleFormButton>
            <DeactivateForm visible={visible} closeForm={closeForm}/>
        </div>
    );
};
const container = css`
  label: deactivate-account-container
`
const toggleFormButton = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0;
  color: red;
  background-color: transparent;
`
const iconCss = css`
  color: red;
  font-size: 18px;
  margin-right: 4px;
  label: deactivate-icon
`

export default DeactivateAccount;

