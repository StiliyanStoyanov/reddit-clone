/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Header = () => {
    const theme = useTheme();
    return (
        <h1 css={headerStyle(theme)}>
            Create a community
        </h1>
    )
}

const headerStyle = theme => css`
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid ${theme.borderColor};
  padding-bottom: 16px;
`

export default Header