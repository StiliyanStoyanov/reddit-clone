/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {useCommunitySelectorDispatch} from "../../CommunitySelector";
import {communitySelectorActions} from "../../../../../../hooks/useCommunitySelector/communitySelectorReducer";
const {toggleDropdown} = communitySelectorActions

const SearchCaretDown = ({inputRef, svgRef}) => {
    const {dispatch} = useCommunitySelectorDispatch();
    const handleCaretDownClick = event => {
        inputRef.current.focus();
        dispatch({type: toggleDropdown});
    }
    return (
        <FontAwesomeIcon
            forwardedRef={svgRef}
            tabIndex={-1}
            css={svgIcon}
            icon={faCaretDown}
            onClick={handleCaretDownClick}
        />
    )
};

const svgIcon = css`
  &:hover {
    cursor: pointer;
  }
  label: caret-down
`

export default SearchCaretDown;
