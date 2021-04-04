/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Header = () => {
    return (
        <h1 css={header}>
            Create a community
        </h1>
    )
}

const header = theme => css`
  font-size: 24px;
  font-weight: 500;
  border-bottom: 1px solid ${theme.border1};
  padding-bottom: 16px;
`

export default Header