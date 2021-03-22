/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropdownToggle = ({icon, open, toggleDropdown, enableFocusLock}) => {
    const theme = useTheme();
    const preventDefault = event => {
        event.preventDefault();
    }
    const handleKeyDown = event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            enableFocusLock();
            toggleDropdown();
        }
    }
    const handleMouseDown = () => {
        toggleDropdown();
        document.activeElement.blur();
    }
    return (
        <div css={[divFocusable(theme, open)]} tabIndex={0} onKeyDown={handleKeyDown} onMouseDown={preventDefault}>
            <div css={[div(theme, open)]} tabIndex={-1} onMouseDown={handleMouseDown}>
                <FontAwesomeIcon css={[iconCss(theme, open)]} icon={icon}/>
                <div css={[overlayDiv(theme)]}/>
            </div>
        </div>
    )
}
const divFocusable = theme => css`
  border-radius: 50%;
  &:focus {
    background-color: ${theme.nav.hoverOverlay};
  }
  label: dropdown-toggle-focusable-container
`
const div = (theme, open) => css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  -webkit-tap-highlight-color: transparent;
  background-color: ${open ? theme.nav.iconContainerActiveBackground : theme.nav.iconContainerBackground};
  cursor:pointer;
  border-radius: 50%;
  label: dropdown-toggle-nonfocusable-container
`
const iconCss = (theme, open) => css`
  font-size: 16px;
  color: ${open ? theme.nav.iconActiveColor : theme.nav.iconColor};
  label: dropdown-toggle-icon
`;
const overlayDiv = theme => css`
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: ${theme.nav.hoverOverlay};
  }
  label: dropdown-toggle-highlight-overlay
`;
export default DropdownToggle