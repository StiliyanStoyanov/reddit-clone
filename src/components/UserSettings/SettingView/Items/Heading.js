/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Heading = ({children}) => {
    const theme = useTheme()
    return (
        <h2 css={heading(theme)}>
            {children}
        </h2>
    );
};

const heading = theme => css`
  color: ${theme.settings.color};
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;
  padding: 40px 0;
`

export default Heading;
