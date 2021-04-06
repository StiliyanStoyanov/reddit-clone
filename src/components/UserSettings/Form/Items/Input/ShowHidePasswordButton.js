/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons/faEye";

const ShowHidePasswordButton = ({showHidePassword}) => {
    return (
        <button type="button" css={[button]} onClick={showHidePassword}>
            <FontAwesomeIcon css={[icon]} icon={faEye}/>
        </button>
    );
};

const button = css`
  background: transparent;
  position: absolute;
  top: 16px;
  right: 12px;
  border: 0;
  cursor: pointer;
  &:hover, &:focus-visible {
    &::after {
     position: absolute;
     font-size: 12px;
     white-space: nowrap;
     padding: 4px;
     border-radius: 4px;
     top: 26px;
     left: -30px;
     content: 'Show Password';
     color: white;
     background-color: #353535
    }
  }
  label: button-show-hide-password
`

const icon = theme => css`
  font-size: 20px;
  color: ${theme.colorGlobal};
`

export default ShowHidePasswordButton;
