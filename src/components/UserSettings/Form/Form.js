/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useClickOutside} from "../../../hooks/useClickOutside";
import {useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import FocusLock from "react-focus-lock";

const Form = ({resetAndCloseForm, visible,  handleSubmit, onSubmit, children}) => {
    const formRef = useRef();
    useClickOutside(formRef, resetAndCloseForm, visible);
    return (
        <div css={[container, visible && container_visible]}>
            <form css={[form]} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                <FocusLock disabled={!visible} returnFocus={true}>
                    <button
                        css={[close_button]}
                        type="button"
                        onClick={resetAndCloseForm}
                    >
                        <FontAwesomeIcon css={[icon_css]} icon={faTimes}/>
                    </button>
                    {children}
                </FocusLock>
            </form>
        </div>
    );
}


const container = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 91;
  width: 100vw;
  height: 100vh;
  background-color: rgb(28, 28, 28, 0.9);
  label: form-container
`
const container_visible = css`
  visibility: visible;
  label: visible
`

const form = theme => css`
  background-color: ${theme.background1};
  border: 1px solid ${theme.border1};
  position: relative;
  padding: 24px 32px;
  max-width: 430px;
  min-width: 300px;
  width: 100%;
  label: form
`

const close_button = theme => css`
  position: absolute;
  cursor: pointer;
  color: ${theme.color1};
  right: 12px;
  top: 12px;
  background-color: transparent;
  border: 0;
  label: form-close-button
`

const icon_css = css`
  font-size: 20px;
  label: form-icon
`

export default Form;
