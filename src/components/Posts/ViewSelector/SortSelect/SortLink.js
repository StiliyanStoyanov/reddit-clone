/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SortLink = ({to, icon, sort, setSort}) => {
    const isSelected = sort === to;
    const handleSelect = event => {
        event.preventDefault();
        setSort(to);
    }

    return (
        <Link css={[link, isSelected && linkActive]} to={to} onClick={handleSelect}>
            <FontAwesomeIcon css={[iconStyle]} icon={icon}/>
            {to}
        </Link>
    );
};

const link = theme => css`
  display: flex;
  position: relative;
  font-size: 16px;
  justify-content: center;
  color: ${theme.itemDefault};
  align-items: center;
  height: 32px;
  margin-right: 8px;
  border-radius: 20px;
  padding: 0 8px;
  &:hover, &:focus-visible {
    color: ${theme.itemHighlight};
    background-color: ${theme.itemHighlightBackground};
  }
  text-transform: capitalize;
`
const linkActive = theme => css`
  color: ${theme.itemActive};
  background-color: ${theme.itemHighlightBackground};
  &:hover, &:focus-visible {
    color: ${theme.itemActive};
    &::before {
      opacity: 0.1;
    }
  }
  &::before {
    content: '';
    position: absolute;
    border-radius: 20px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: ${theme.itemHighlight};
  }
`;

const iconStyle = css`
 margin-right: 4px;
 margin-top: 2px;
 font-size: 20px;
`

export default SortLink;
