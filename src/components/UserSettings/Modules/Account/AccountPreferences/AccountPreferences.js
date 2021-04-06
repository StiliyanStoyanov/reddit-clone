/** @jsxImportSource @emotion/react */
import SubPanelHeading from "../../../ModulesItems/SubPanelHeading";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";

const AccountPreferences = () => {
    return (
        <div css={{label: 'account-preferences'}}>
            <SubPanelHeading>Account Preferences</SubPanelHeading>
            <ChangeEmail/>
            <ChangePassword/>
        </div>
    );
};

export default AccountPreferences;

