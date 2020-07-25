/* eslint-disable no-unused-vars */
/** @jsx jsx */
import React from "react";
import {jsx, css} from "@emotion/core";
import { colors, border, padding} from "../../styles";

// TODO: Implement search logic

const searchStyle = css`
  font-size: 24px;
  color: ${colors.textColor};
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: ${colors.textColor};
  }
  ::-moz-placeholder {
    color: ${colors.textColor};
  };
  background-color: ${colors.inputBackground};
  border: 1px solid ${colors.borderColor};
  border-radius: ${border.radius};
  width: 35vw;
  height: 2em;
  margin-right: 10px;
  padding: ${padding};
  outline: none;
  &:hover, &:active, &:focus {
    border-color: white;
  };
`

const Search = () => {
    return <input type="text" placeholder="Search" css={searchStyle} />
}

export { Search }