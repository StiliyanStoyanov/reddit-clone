/** @jsx jsx */
import {jsx, css} from "@emotion/core";
import Options from "./Items/Options";
import Heading from "./Items/Heading";
import {useTheme} from "emotion-theming";

const SettingsNavigation = () => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
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
`


export default SettingsNavigation;
