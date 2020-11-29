/** @jsx jsx */
import SettingView from "../../SettingView/SettingView";
import Heading from "../../SettingView/Items/Heading";
import {jsx} from "@emotion/core";
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import Avatar from "./Avatar/Avatar";

const ProfileView = () => {
    return (
        <SettingView>
            <Heading>Customize Profile</Heading>
            <ProfileInformation/>
            <Avatar/>
        </SettingView>
    );
};

export default ProfileView;
