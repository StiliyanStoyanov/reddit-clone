import SettingsContainer from "../../ModulesItems/SettingsContainer";
import PanelHeading from "../../ModulesItems/PanelHeading";
import ProfileInformation from "./ProfileInformation/ProfileInformation";
import Avatar from "./Avatar/Avatar";

const ProfileView = () => {
    return (
        <SettingsContainer>
            <PanelHeading>Customize Profile</PanelHeading>
            <ProfileInformation/>
            <Avatar/>
        </SettingsContainer>
    );
};

export default ProfileView;
