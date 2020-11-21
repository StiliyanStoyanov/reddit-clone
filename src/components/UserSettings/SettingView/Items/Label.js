/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Label = ({children}) => {
    const theme = useTheme();
    return (
        <h3 css={label(theme)}>{children}</h3>
    );
};
const label = theme => css`
font: inherit;
margin: 0 0 32px;
padding: 0 0 6px;
border: 0;
vertical-align: baseline;
font-size: 10px;
font-weight: 700;
letter-spacing: .5px;
line-height: 12px;
text-transform: uppercase;
border-bottom: 2px solid ${theme.settings.borderColor};
color: ${theme.settings.metaText}

`

export default Label;
