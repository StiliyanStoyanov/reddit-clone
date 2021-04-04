/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DropdownMenus = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  display: flex;
  margin-left: auto;
  label: dropdown-menu-container
`

export default DropdownMenus;
