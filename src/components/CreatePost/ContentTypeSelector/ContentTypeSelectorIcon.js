import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styled from "@emotion/styled";

const ContentTypeSelectorIcon = ({icon}) => <Icon icon={icon}/>

const Icon = styled(FontAwesomeIcon)`
  height: 20px;
  min-width: 20px;
  margin-right: 4px;
`

export default ContentTypeSelectorIcon
