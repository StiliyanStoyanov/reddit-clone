import styled from "@emotion/styled";

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  padding: 8px 4px 8px 0;
  border-left: 4px solid transparent;
  height: 100%;
  overflow: hidden;
  align-items: center;
  @media (max-width: 420px) {
    height: 32px;
    width: 86px;
    top: auto;
    bottom: 0;
    justify-content: center;
  }
`