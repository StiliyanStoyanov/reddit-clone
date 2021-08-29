/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFrown} from "@fortawesome/free-solid-svg-icons/faFrown";
import {Link} from "react-router-dom";
import {overlay} from "../../styles/general_styles";

const UserNotFound = () => {
    return (
        <div css={[container]}>
            <FontAwesomeIcon icon={faFrown} size="10x"/>
            <h3>Sorry, there is nobody with this username</h3>
            <Link css={a} to="/">Go Home</Link>
        </div>
    );
};

const container = css`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: calc(100vh - 71px);
  justify-content: center;
  align-items: center;
`
const a = theme => css`
  position: relative;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  height: 40px;
  max-width: 400px;
  width: 95%;
  margin: 0 8px;
  line-height: 40px;
  color: ${theme.background1};
  padding: 0 8px;
  border-radius: 8px;
  background-color: ${theme.colorHighlight2};
  ${overlay(theme.background1, 0.1)};
`

export default UserNotFound;
