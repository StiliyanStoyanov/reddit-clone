/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Banner = () => {
    const theme = useTheme()

    return (
        <div css={css`
          ${bannerPlaceholder};
          background-color: ${theme.navIconActiveColor};`
        }/>
    )
}

//TODO: Add banner
const bannerPlaceholder = css`
  display: block;
  width: 200px;
  min-width: 100px;
  min-height: 100%;
  @media screen and (max-width: 560px) {
    display: none;
  }
`
export default Banner