import styled from "@emotion/styled";

const DropdownItemsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0 8px;
  border-radius: 8px; 
  cursor:pointer;
  user-select: none;
  &:hover {
    background-color: ${ ({theme}) => theme.dropdownHoverColor };
  }
`

export default DropdownItemsContainer