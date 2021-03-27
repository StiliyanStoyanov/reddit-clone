/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useRef, useState} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Items/Button";
import {useClickOutside} from "../../../../hooks/useClickOutside";
import {ReactComponent as CardSvg} from "../../../../assets/card.svg";
import {ReactComponent as CompactSvg} from "../../../../assets/compact.svg";
import Svg from "./Items/SvgIcon";

const ViewSelect = ({view, setView}) => {
    const theme = useTheme();
    const [visible, setVisible] = useState(false);
    const viewDropdownContainerRef = useRef();
    const closeDropdown = e => setVisible(false);
    const changeView = (view, e) => {
        setView(view);
        closeDropdown();
    }

    useClickOutside(viewDropdownContainerRef, closeDropdown, visible);
    return (
        <div css={container} ref={viewDropdownContainerRef}>
            <div>
                <button css={dropdownToggleStyle} onClick={() => setVisible(prevState => !prevState)}>
                    {view === 'card' && <Svg Svg={CardSvg}/>}
                    {view === 'compact' && <Svg Svg={CompactSvg}/>}
                    <FontAwesomeIcon css={css`color: ${theme.itemActive}; margin-left: 2px`} icon={faCaretDown}/>
                </button>
            </div>
            <div css={dropdownContainer(theme,visible)}>
                <Button onClick={(e) => changeView('card', e)}>
                    <Svg Svg={CardSvg} secondary={true}/>
                    Card
                </Button>
                <Button onClick={(e) => changeView('compact', e)}>
                    <Svg Svg={CompactSvg} secondary={true}/>
                    Compact
                </Button>
            </div>
        </div>
    );
};

const dropdownToggleStyle = theme => css`
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
  z-index: 3;
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

export default ViewSelect;
