/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

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
