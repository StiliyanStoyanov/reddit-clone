/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Icon from "./Icon";

const Header = ({headerIcon, headerText}) => {
    return (
        <div css={[container]}>
            <Icon icon={headerIcon}/>
            <h2 css={[header]}>{headerText}</h2>
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`
const header = theme => css`
  font-size: 22px;
  color: ${theme.color1};
  font-weight: 700;
  margin: 0;
  padding: 0;
  border: 0;

`

export default Header;
