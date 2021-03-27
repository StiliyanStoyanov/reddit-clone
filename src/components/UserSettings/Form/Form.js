/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useClickOutside} from "../../../hooks/useClickOutside";
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import FocusLock from "react-focus-lock";

const Form = ({visible, closeForm, children, onSubmit, handleSubmit}) => {
    const theme = useTheme();
    const formRef = useRef();
    const handleCloseButtonKeyDown = event => {
        if (event.key === "Enter") {
            return closeForm();
        }
    }

    useClickOutside(formRef, closeForm, visible);
    return (
        <div css={container(visible)}>
            <form css={form(theme)} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <FocusLock disabled={!visible} returnFocus={true}>
                    <button
                        type="button" css={closeButton(theme)}
                        onMouseDown={closeForm}
                        onKeyDown={handleCloseButtonKeyDown}
                    >
                        <FontAwesomeIcon css={iconCss} icon={faTimes}/>
                    </button>
                    {children}
                </FocusLock>
            </form>
        </div>
    );
}


const container = visible => css`
  position: absolute;
  visibility: ${visible ? 'visible' : 'hidden'};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 91;
  width: 100vw;
  height: 100vh;
  background-color: rgb(28, 28, 28, 0.9)
`

const form = theme => css`
  background-color: ${theme.settings.backgroundColor};
  border: 1px solid ${theme.settings.borderColor};
  position: relative;
  padding: 24px 32px;
  max-width: 430px;
  min-width: 300px;
  width: 100%;
`

const closeButton = theme => css`
  position: absolute;
  cursor: pointer;
  color: ${theme.settings.color};
  right: 12px;
  top: 12px;
  background-color: transparent;
  border: 0;
`

const iconCss = css`
  font-size: 20px;
`

export default Form;
