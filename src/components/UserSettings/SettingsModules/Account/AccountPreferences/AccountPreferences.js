/** @jsx jsx */
import Label from "../../../SettingView/Items/Label";
import ChangeEmail from "./ChangeEmail/ChangeEmail";
import ChangePassword from "./ChangePassword/ChangePassword";
import {css, jsx} from "@emotion/core";

const AccountPreferences = () => {
    return (
        <div css={css`display: block;`}>
            <Label>Account Preferences</Label>
            <ChangeEmail/>
            <ChangePassword/>
        </div>
    );
};

export default AccountPreferences;

