/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Router, useNavigate} from "@reach/router";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";
import {useUserStore} from "../../store/UserStoreProvider";
import {useTheme} from "@emotion/react";
import AccountView from "./SettingsModules/Account/AccountView";
import ProfileView from "./SettingsModules/Profile/ProfileView";

const UserSettings = () => {
    const {user} = useUserStore();
    const theme = useTheme();
    const navigate = useNavigate();

    if (!user) {
        navigate('/login')
        return null
    }
    return (
        <div css={pageContainer}>
            <div css={[itemsContainer(theme)]}>
                <SettingsNavigation/>
                <Router primary={false} id="settings-content">
                    <AccountView path="/"/>
                    <AccountView path="account"/>
                    <ProfileView path="profile"/>
                </Router>
            </div>
        </div>
    );
};

const pageContainer = css`
  padding: 0 8px;
  @media screen and (max-width: 1000px) {
    padding: 0 4px;
  }
`
const itemsContainer = theme => css`
  padding: 1em;
  background-color: ${theme.settings.backgroundColor};
  max-width: 1000px;
  min-width: 380px;
  margin: 8px auto;
  label: settings-container
`

export default UserSettings;
