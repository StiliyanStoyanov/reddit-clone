/** @jsxImportSource @emotion/react */
import React from "react";
import {css, useTheme} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DropdownItemIcon = ({icon}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <FontAwesomeIcon css={iconCss} icon={icon}/>
        </div>
    )
}
const container = theme => css`
  display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 36px;
  height: 36px;
  margin: 8px 8px 12px 0;
  border-radius: 50%;
  background-color: ${theme.nav.iconContainerBackground};
`
const iconCss = css`
  font-size: 20px;
`

export default DropdownItemIcon