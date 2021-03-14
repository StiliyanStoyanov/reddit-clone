/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Search = () => {
    const theme = useTheme();
    return (
        <div css={css`padding: 0 5px`}>
            <div css={container(theme)}>
                <FontAwesomeIcon css={icon} icon={faSearch} />
            </div>
        </div>
    )
}

const container = theme => css`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${theme.nav.iconContainerBackground};
  &:hover {
    background-color: ${theme.nav.hoverBackground};
  }
  cursor: pointer;
`
const icon = css`
  height: 20px;
  width: 20px;
  opacity: 0.8;
`
