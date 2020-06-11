import styled from "@emotion/styled";
import { colors } from "../../styles";
const {borderColor, backgroundColor} = colors

export const PostContainer = styled.div`
  display: flex;
  position: relative;
  margin: 0 auto 10px;
  padding-top: 8px;
  padding-left: 40px;
  border: 1px solid ${borderColor};
  border-radius: 4px;
  background-color: ${backgroundColor};
  min-width: 380px;
  max-width: 700px;
  min-height: 80px;
  max-height: 500px;
  width: 100%;
  cursor: pointer;
`