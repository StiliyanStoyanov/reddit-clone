/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

export const Info = ({children, ...props}) => {
    return (
        <div css={infoContainer} {...props}>
            {children}
        </div>
    )
}

const infoContainer = css`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 8px;
`

export default Info



