/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Options from "./Items/Options";
import Heading from "./Items/Heading";

const SettingsNavigation = () => {
    return (
        <div css={[container]}>
            <Heading/>
            <Options/>
        </div>
    );
};
const container = theme => css`
  max-width: 1000px;
  min-width: 380px;
  margin: 0 auto;
  border-bottom: 1px solid ${theme.border1};
  label: settings-navigation
`


export default SettingsNavigation;
