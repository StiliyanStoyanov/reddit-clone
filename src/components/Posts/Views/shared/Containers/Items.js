/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Items = ({children, ...props}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)} {...props}>
            {children}
        </div>
    );
};

const container = theme => css`
  width: 100%;
`

export default Items;
