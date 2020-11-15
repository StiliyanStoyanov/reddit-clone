import {css} from "@emotion/core";

export const inputFieldBase = (theme) => {
    return (
        css`
          display: block;
          background-color: ${theme.createCommunity.backgroundColor};
          color: ${theme.color};
          outline: none;
          border: 1px solid ${theme.borderColor};
          font-size: 18px;
          height: 40px;
          border-radius: 4px;
          width: 100%;
          margin-top: 5px;
          &:focus {
            border-color: ${theme.createCommunity.borderColorOnFocus};
          }
        `
    )
}