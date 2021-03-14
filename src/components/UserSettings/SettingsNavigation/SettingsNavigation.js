/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import Options from "./Items/Options";
import Heading from "./Items/Heading";

const SettingsNavigation = () => {
    const theme = useTheme();
    return (
        <div css={[container(theme)]}>
            <Heading/>
            <Options/>
        </div>
    );
};
const container = theme => css`
  max-width: 1000px;
  min-width: 380px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.borderColor};
  label: settings-navigation
`


export default SettingsNavigation;
