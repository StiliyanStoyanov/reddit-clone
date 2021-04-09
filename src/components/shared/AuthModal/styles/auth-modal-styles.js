import {css} from "@emotion/react";

export const auth_form = css`
  width: 100%;
  input, label {
    max-width: 440px;
  }
  label: auth-form
`

export const auth_form_submit_button =  css`
  color:#ffffff;
  font-size: 18px;
  font-family:'Roboto',sans-serif;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  margin-top: 24px;
  background-color:#3369ff;
  &:active {
    box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
  }
  &:disabled {
    background-color: rgba(51, 105, 255, 0.3);
    cursor: no-drop;
  }
  label: auth-form-button
`
