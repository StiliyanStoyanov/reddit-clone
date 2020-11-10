/** @jsx jsx */
import {useNavigate} from "@reach/router";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const DropdownLinkItem = (props) => {
    const {children, to, toggleDropdown, enableFocusLock} = props
    const navigate = useNavigate();
    const theme = useTheme();
    const handleMouseDown = event => {
        event.preventDefault();
        navigate(to)
        toggleDropdown();
    }
    const handleKeyDown = event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate(to)
            toggleDropdown();
        }
    }
    return (
        <a
            css={linkStyle(theme)}
            href={`${to}`}
            onFocus={enableFocusLock}
            onMouseDown={handleMouseDown}
            onKeyDown={handleKeyDown}
        >
            {children}
        </a>
    );
};
const linkStyle = theme => css`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover, &:focus {
    background-color: ${theme.nav.hoverOverlay};
  }
`

export default DropdownLinkItem;
