/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Description = ({children}) => {
    const theme = useTheme();
    return (
        <p css={container(theme)}>
            {children}
        </p>
    );
};

const container = theme => css`
  margin: 0;
  font-weight: 400;
  color: ${theme.settings.metaText};
  font-size: 12px;
  line-height: 16px;
`

export default Description;
