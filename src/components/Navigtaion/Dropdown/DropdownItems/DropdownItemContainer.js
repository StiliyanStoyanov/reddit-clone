import styled from "@emotion/styled";

const DropdownItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover, &:focus-visible {
    background-color: ${ ({theme}) => theme.nav.hoverOverlay };
  };
`

export default DropdownItemContainer