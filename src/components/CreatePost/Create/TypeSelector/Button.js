/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePostDispatch, usePostStore, createPostStoreActions} from "../../../../store/CreatePostStoreProvider";
import {overlay} from "../../../../styles/general_styles";
const {changeForm} = createPostStoreActions

const Button = ({forForm, icon, children}) => {
    const {activeForm} = usePostStore();
    const dispatch = usePostDispatch();
    const isActive = activeForm === forForm;
    return (
        <button
            css={[button, isActive && buttonActive]}
            onClick={() => dispatch({type: changeForm, payload: {switchTo: forForm}})}
        >
            <FontAwesomeIcon css={iconCss} icon={icon}/>
            {children}
        </button>
    );
};

const button = theme => css`
  display: flex;
  position: relative;
  cursor: pointer;
  outline: 0;
  color: ${theme.color2};
  background-color: ${theme.background1};
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border: 0;
  border-right: 1px solid ${theme.border1};
  border-bottom: 1px solid ${theme.border1};
  ${overlay(theme.hover1, 0.7)};
  &:first-of-type {
    border-top-left-radius: 4px;
  }

  &:last-of-type {
    border-top-right-radius: 4px;
  }

  label: type-selector-button;
`;
const buttonActive = theme => css`
  color: ${theme.colorHighlight2};
  border-bottom: 1px solid ${theme.colorHighlight2};
  label: active
`
const iconCss = css`
  font-size: 20px;
  margin-right: 6px;
`


export default Button;
