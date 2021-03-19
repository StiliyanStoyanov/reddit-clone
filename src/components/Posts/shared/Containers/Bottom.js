/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const BottomContainer = ({children}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            {children}
        </div>
    );
};

const container = theme => css`
  display: flex;
  height: 32px;
  padding: 4px;
`

export default BottomContainer;
