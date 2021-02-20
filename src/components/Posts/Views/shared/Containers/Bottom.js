/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

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
