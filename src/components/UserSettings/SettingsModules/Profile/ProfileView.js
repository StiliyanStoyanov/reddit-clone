import SettingView from "../../SettingView/SettingView";
import Heading from "../../SettingView/Items/Heading";
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
