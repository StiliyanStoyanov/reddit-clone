import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../styles";
const {borderColor, backgroundColor} = colors

export const PostsContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto 10px;
  padding-top: 8px;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  background-color: ${backgroundColor};
  max-width: 700px;
  min-height: 500px;
  width: 100%;
  cursor: pointer;
  padding-left: 40px;
`