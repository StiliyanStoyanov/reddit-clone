import React from 'react';
import SettingsContainer from "../../ModulesItems/SettingsContainer";
import PanelHeading from "../../ModulesItems/PanelHeading";
import AccountPreferences from "./AccountPreferences/AccountPreferences";
import DeactivateAccount from "./DeactivateAccount/DeactivateAccount";

const AccountView = () => {
    return (
        <SettingsContainer>
            <PanelHeading>Account Settings</PanelHeading>
            <AccountPreferences/>
            <DeactivateAccount/>
        </SettingsContainer>
    );
};

export default AccountView;
