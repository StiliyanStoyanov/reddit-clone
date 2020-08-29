import styled from "@emotion/styled";

const DropdownContentContainer = styled.div`
  position: absolute;
  z-index: 2;
  background-color: ${ ({theme}) => theme.navBackgroundColor};
  width: 360px;
  border-radius: 8px;
  top: 60px;
  right: 8px;
  overflow: auto;
  border: 1px solid ${ ({theme}) => theme.borderColor };
  display: ${props => props.open ? 'block' : 'none'};
`;

export default DropdownContentContainer