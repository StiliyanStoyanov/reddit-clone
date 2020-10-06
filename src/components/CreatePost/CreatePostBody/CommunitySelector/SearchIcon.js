/** @jsx jsx */
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {css, jsx} from "@emotion/core";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SearchIcon = ({focused, selectedCommunity}) => {
    if (focused) {
        return <Icon icon={faSearch}/>;
    } else if (selectedCommunity && selectedCommunity.imageUrl) {
        return <span css={css`
          ${fetchedIconStyle};
          border: 0;
          background-image: url("${selectedCommunity.imageUrl}");
        `}/>
    } else {
        return <span css={fetchedIconStyle}/>
    }
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const Icon = styled(FontAwesomeIcon)`
  height: 22px;
  width: 22px;
`
const fetchedIconStyle = css`
  width: 24px;
  height: 20px;
  border: 1px dashed cornflowerblue;
  border-radius: 50%;
`
export default SearchIcon