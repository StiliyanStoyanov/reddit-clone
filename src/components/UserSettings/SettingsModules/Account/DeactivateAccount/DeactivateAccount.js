/** @jsx jsx */
import Label from "../../../SettingView/Items/Label";
import {css, jsx} from "@emotion/core";
import ToggleFormButton from "../../../SettingView/Items/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import {useState} from "react";
import DeactivateForm from "./DeactivateForm";

const DeactivateAccount = () => {
    const [visible, setVisible] = useState(false);
    const toggleForm = e =>  setVisible(prevState => !prevState)
    const closeForm = e => setVisible(false);
    const handleKeyDown = event => {
        if (event.key === "Enter") {
            return toggleForm();
        }
    }

    return (
        <div css={css`display: block`}>
            <Label>Deactivate Account</Label>
            <ToggleFormButton css={toggleFormButton} onKeyDown={handleKeyDown} onMouseDown={toggleForm}>
                <FontAwesomeIcon css={icon} icon={faTrashAlt}/>
                Deactivate Account
            </ToggleFormButton>
            {visible && <DeactivateForm visible={visible} closeForm={closeForm}/>}
        </div>
    );
};

const toggleFormButton = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 0;
  color: red;
  background-color: transparent;
`
const icon = css`
  color: red;
  font-size: 18px;
  margin-right: 4px;
`

export default DeactivateAccount;

