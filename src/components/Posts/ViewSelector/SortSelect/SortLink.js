/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SortLink = ({to, icon, sort, setSort}) => {
    const theme = useTheme();
    const isSelected = sort === to;
    const handleSelect = event => {
        event.preventDefault();
        setSort(to);
    }
    return (
        <Link css={link(theme, isSelected)} to={to} onClick={handleSelect}>
            <FontAwesomeIcon css={iconStyle(theme, isSelected)} icon={icon}/>
            {to}
        </Link>
    );
};

const link = (theme, isSelected) => css`
  display: flex;
  font-size: 16px;
  justify-content: center;
  color: ${isSelected ? theme.itemActive : theme.itemDefault};
  ${isSelected && `background-color: ${theme.itemHighlightBackground}`};
  align-items: center;
  height: 32px;
  margin-right: 8px;
  border-radius: 20px;
  padding: 0 8px;
  &:hover, &:focus-visible {
    color: ${isSelected ? theme.itemActive : theme.itemHighlight};
    background-color: ${theme.itemHighlightBackground};
    & svg {
      color: ${isSelected ? theme.itemActive : theme.itemHighlight};
    }
  }
  text-transform: capitalize;
`

const iconStyle = (theme, isSelected) => css`
 color: ${isSelected ? theme.itemActive : theme.itemDefault};
 margin-right: 4px;
 margin-top: 2px;
 font-size: 20px;
`

export default SortLink;
