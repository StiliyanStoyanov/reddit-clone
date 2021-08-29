/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import useCreatePortal from "../../../hooks/useCreatePortal";
import {page_overlay} from "../../../styles/general_styles";
import ReactFocusLock from "react-focus-lock";
import React from "react";

const Dialog = ({id = 'dialog', children, className}) => {
    const {Portal} = useCreatePortal({id});
    return (
        <ReactFocusLock disabled={false} returnFocus={true}>
            <Portal>
                <div css={container} className={className || null}>
                    <div css={content_container}>
                        {children}
                    </div>
                </div>
            </Portal>
        </ReactFocusLock>


    );
};

const container = css`
  ${[page_overlay(99)]};
  display: flex;
  justify-content: center;
  align-items: center;
  label: dialog;
`
const content_container = theme => css`
  display: flex;
  flex-flow: column;
  width: 300px;
  margin: 24px;
  background-color: ${theme.background1};
  border-radius: 4px;
  padding: 14px;
`

export default Dialog;
