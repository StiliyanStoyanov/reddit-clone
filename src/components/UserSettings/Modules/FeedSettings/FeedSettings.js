import SettingsContainer from "../../ModulesItems/SettingsContainer";
import PanelHeading from "../../ModulesItems/PanelHeading";
import ContentPreferences from "./ContentPreferences";

const FeedSettings = () => {
    return (
        <SettingsContainer>
            <PanelHeading>Feed settings</PanelHeading>
            <ContentPreferences/>
        </SettingsContainer>
    );
};

export default FeedSettings;
