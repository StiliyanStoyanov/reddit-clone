import {css} from "@emotion/react";

export const inputFieldBase = (theme) => {
    return (
        css`
          display: block;
          background-color: ${theme.background1};
          color: ${theme.color1};
          outline: none;
          border: 1px solid ${theme.border1};
          font-size: 18px;
          height: 40px;
          border-radius: 4px;
          width: 100%;
          margin-top: 5px;
          &:focus {
            border-color: ${theme.colorHighlight1};
          }
        `
    )
}