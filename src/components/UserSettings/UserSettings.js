/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {Router, useNavigate} from "@reach/router";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";
import {useUserStore} from "../../store/UserStoreProvider";
import {useTheme} from "emotion-theming";
import AccountView from "./SettingsModules/Account/AccountView";

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
            <div css={itemsContainer(theme)}>
                <SettingsNavigation/>
                <Router primary={false}>
                    <AccountView path="/"/>
                    <AccountView path="account"/>
                </Router>
            </div>
        </div>
    );
};
/* STYLES USED IN THIS FILE BELOW */
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
`

export default UserSettings;
