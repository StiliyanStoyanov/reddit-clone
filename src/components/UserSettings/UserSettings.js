/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Routes} from "react-router";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";
import {useUserStore} from "../../store/UserStoreProvider";
import AccountView from "./Modules/Account/AccountView";
import ProfileView from "./Modules/Profile/ProfileView";

const UserSettings = () => {
    const {user} = useUserStore();
    if (!user) {
        return null
    }
    return (
        <div css={[pageContainer]}>
            <div css={[itemsContainer]}>
                <SettingsNavigation/>
                <Routes>
                    <AccountView path="account"/>
                    <ProfileView path="profile"/>
                </Routes>
            </div>
        </div>
    );
};

const pageContainer = css`
  padding: 0 8px;
  @media screen and (max-width: 1000px) {
    padding: 0 4px;
  }
  label: settings-page-container
`
const itemsContainer = theme => css`
  padding: 1em;
  background-color: ${theme.background1};
  max-width: 1000px;
  min-width: 380px;
  margin: 8px auto;
  label: settings-main-container
`

export default UserSettings;
