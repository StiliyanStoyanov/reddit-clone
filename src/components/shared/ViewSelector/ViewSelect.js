/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef} from "react";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useClickOutside} from "../../../hooks/useClickOutside";
import {ReactComponent as CardSvg} from "../../../assets/card.svg";
import {ReactComponent as CompactSvg} from "../../../assets/compact.svg";
import {view_button, view_icon_primary, view_icon_secondary} from "./styles/view_selector_styles";
import useToggle from "../../../hooks/useToggle";

const ViewSelect = ({view, handleViewClick}) => {
    const containerRef = useRef();
    const [visible, {close, toggle}] = useToggle();

    useClickOutside(containerRef, close, visible);
    return (
        <div css={[container]} ref={containerRef}>
            <button css={dropdown_toggle} onClick={toggle}>
                {view === 'card' && <CardSvg css={view_icon_primary}/>}
                {view === 'compact' && <CompactSvg css={view_icon_primary}/>}
                <FontAwesomeIcon css={icon_css} icon={faCaretDown}/>
            </button>
            <div css={[dropdown_container, visible && {visibility: 'visible'}]}>
                <button css={view_button} onClick={(e) => {
                    handleViewClick('card', e);
                    close();
                }}>
                    <CardSvg css={[view_icon_secondary]}/>
                    <span>Card</span>
                </button>
                <button css={view_button} onClick={(e) => {
                    handleViewClick('compact', e);
                    close();
                }}>
                    <CompactSvg css={view_icon_secondary}/>
                    <span>Compact</span>
                </button>
            </div>
        </div>
    );
};
const container = css`
  display: flex;
  position: relative;
  margin-left: auto;
  align-items: center;
  label: view-select
`
const dropdown_container = theme => css`
  display: flex;
  z-index: 3;
  flex-direction: column;
  visibility: hidden;
  position: absolute;
  top: 50px;
  right: 0;
  border: 1px solid ${theme.border1};
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(215, 218, 220, 0.2);
  align-items: center;
  background-color: ${theme.background1};
  label: view-select-options
`
const dropdown_toggle = theme => css`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  &:hover, &:focus-visible {
    background-color: ${theme.background2};
  }
  border-radius: 20px;
  padding: 8px;
  label: view-select-toggle
`

const icon_css = theme => css`
  color: ${theme.colorHighlight2};
  margin-left: 2px;
  label: view-select-icon
`

export default ViewSelect;
