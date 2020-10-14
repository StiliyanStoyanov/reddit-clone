/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";


const Header = () => {
    const theme = useTheme();
    return (
        <h1 css={css`
          ${header};
          border-bottom: 1px solid ${theme.borderColor}
        `}>
            Create a community
        </h1>
    )
}

const header = css`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 16px;
`

export default Header