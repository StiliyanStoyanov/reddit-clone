/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const SettingsContainer = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  max-width: 688px;
  label: settings-container
`

export default SettingsContainer;
