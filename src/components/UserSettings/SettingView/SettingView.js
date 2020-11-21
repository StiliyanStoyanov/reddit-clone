/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const SettingView = ({children}) => {
    return (
        <div css={container}>
            {children}
        </div>
    );
};

const container = css`
  max-width: 688px;
`

export default SettingView;
