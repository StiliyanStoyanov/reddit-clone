/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Routes} from "react-router";
import SettingsNavigation from "./SettingsNavigation/SettingsNavigation";
import {useUserStore} from "../../store/UserStore/UserStoreProvider";
import AccountView from "./Modules/Account/AccountView";
import ProfileView from "./Modules/Profile/ProfileView";
import FeedSettings from "./Modules/FeedSettings/FeedSettings";

const UserSettings = () => {
    const {user} = useUserStore();
    if (!user) return null
    return (
        <div css={[page_container]}>
            <div css={[items_container]}>
                <SettingsNavigation/>
                <Routes>
                    <AccountView path="account"/>
                    <ProfileView path="profile"/>
                    <FeedSettings path="feed"/>
                </Routes>
            </div>
        </div>
    );
};

const page_container = theme => css`
  background-color: ${theme.background1};
  margin: 8px auto;
  max-width: 1000px;
  border-radius: 4px;
  label: settings-page-container
`
const items_container = css`
  padding: 1em;
  label: settings-items-container
`

export default UserSettings;
