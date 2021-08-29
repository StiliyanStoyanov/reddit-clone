/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CloseButton = ({closeModal}) => {
    return (
        <div css={[container]}>
            <button css={[button]} onClick={closeModal}>
                <FontAwesomeIcon css={[icon_css]} icon={faTimes}/>
            </button>
        </div>
    );
};

const container = css`
  position: absolute;
  right: 14px;
  top: 14px;
  label: close-button-container;
`
const button = theme => css`
  color: ${theme.colorGlobal};
  cursor: pointer;
  background: transparent;
  border: 0;
  label: close-button;
`
const icon_css = css`
  font-size: 20px;
  label: close-button-icon;
`

export default CloseButton;
