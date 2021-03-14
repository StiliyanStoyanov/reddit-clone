/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

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