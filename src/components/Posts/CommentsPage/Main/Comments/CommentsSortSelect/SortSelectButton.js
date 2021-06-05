/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";


const SortSelectButton = ({activeSort, setSort, children}) => {
    const isActive = activeSort === children
    return (
        <button
            css={[sort_button, isActive && sort_button_active]}
            onClick={setSort}
        >
            {children}
        </button>
    );
};
const sort_button_active = theme => css`
  color: ${theme.color1};
`
const sort_button = theme => css`
  padding: 4px;
  color: ${theme.color2};
  background-color: transparent;
  width: 100%;
  &:hover, &:focus-visible {
    color: ${theme.color1};
    background-color: ${theme.colorBlue};
  }
  &:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  text-align: left;
  display: block;
`

export default SortSelectButton;
