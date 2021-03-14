/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContentTypeSelectorIcon = ({icon}) => <FontAwesomeIcon css={iconCss} icon={icon}/>

const iconCss = css`
  height: 20px;
  min-width: 20px;
  margin-right: 4px;
`

export default ContentTypeSelectorIcon
