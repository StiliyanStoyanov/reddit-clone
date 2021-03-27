/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const DropdownLinkItem = (props) => {
    const {children, to, toggleDropdown, enableFocusLock} = props

    const handleClick = event => {
        toggleDropdown();
    }

    return (
        <Link
            css={[link]}
            onClick={handleClick}
            to={to}
            onFocus={enableFocusLock}
        >
            {children}
        </Link>
    );
};
const link = theme => css`
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
  label: dropdown-link-item
`

export default DropdownLinkItem;
