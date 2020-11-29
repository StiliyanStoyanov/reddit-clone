/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useRef, useState} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Items/Button";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {ReactComponent as CardSvg} from "../../../../assets/card.svg";
import {ReactComponent as CompactSvg} from "../../../../assets/compact.svg";
import Svg from "./Items/SvgIcon";

const ViewTypeSelect = ({viewType, setViewType}) => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const dropdownContainerRef = useRef();
    const closeDropdown = event => setVisible(false);
    const changeToCardView = event => setViewType('card');
    const changeToCompactView = event => setViewType('compact');

    useClickOutside(dropdownContainerRef, closeDropdown, visible);
    return (
        <div css={container}>
            <div>
                <button css={dropdownToggleButton} onClick={() => setVisible(prevState => !prevState)}>
                    {viewType === 'card' && <Svg Svg={CardSvg}/>}
                    {viewType === 'compact' && <Svg Svg={CompactSvg}/>}
                    <FontAwesomeIcon css={css`color: ${theme.itemActive}; margin-left: 2px`} icon={faCaretDown}/>
                </button>
            </div>
            <div css={dropdownContainer(theme,visible)} ref={dropdownContainerRef}>
                <Button onClick={changeToCardView}>
                    <Svg Svg={CardSvg} secondary={true}/>
                    Card
                </Button>
                <Button onClick={changeToCompactView}>
                    <Svg Svg={CompactSvg} secondary={true}/>
                    Compact
                </Button>
            </div>
        </div>
    );
};

const dropdownToggleButton = theme => css`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  &:hover, &:focus-visible {
    background-color: ${theme.itemHighlightBackground};
  }
  border-radius: 20px;
  padding: 8px;
`
const container = css`
 display: flex;
 position: relative;
 margin-left: auto;
 align-items: center;
`
const dropdownContainer = (theme, visible) => css`
  display: flex;
  flex-direction: column;
  visibility: ${visible ? 'visible' : 'hidden'};
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid ${theme.borderColor};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(215, 218, 220, 0.2);
  align-items: center;
  background-color: ${theme.nav.backgroundColor};
`

export default ViewTypeSelect;
