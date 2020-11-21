import React from 'react';
import SettingView from "../../SettingView/SettingView";
import Heading from "../../SettingView/Items/Heading";
import AccountPreferences from "./AccountPreferences/AccountPreferences";
import DeactivateAccount from "./DeactivateAccount/DeactivateAccount";

const AccountView = () => {
    return (
        <SettingView>
            <Heading>Account Settings</Heading>
            <AccountPreferences/>
            <DeactivateAccount/>
        </SettingView>
    );
};

export default AccountView;
