import {css} from "@emotion/core";

export const inputFieldBase = css`
  display: block;
  background-color: #1a1a1b;
  color: white;
  outline: none;
  border: 2px solid #343434;
  font-size: 18px;
  height: 40px;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
  &:focus {
    border-color: white;
  }
`