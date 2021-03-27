/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Routes, useNavigate} from "react-router";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";
import {useUserStore} from "../../store/UserStoreProvider";
import AccountView from "./SettingsModules/Account/AccountView";
import ProfileView from "./SettingsModules/Profile/ProfileView";
import {useEffect} from "react";

const UserSettings = () => {
    const {user} = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])
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
  background-color: ${theme.settings.backgroundColor};
  max-width: 1000px;
  min-width: 380px;
  margin: 8px auto;
  label: settings-container
`

export default UserSettings;
