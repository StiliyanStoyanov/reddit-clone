/** @jsx jsx */
import {Link} from "@reach/router";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useEffect, useRef} from "react";

const OptionLink = ({option, children, selectedOption, selectOption}) => {
    const inputRef = useRef();
    const theme = useTheme();
    const selected = selectedOption === option;

    useEffect(() => {
        inputRef.current && selected && inputRef.current.focus();
    }, [selected]);

    const handleMouseDown = () => {
        selectOption(option);
    }
    const handleKeyDown = event => {
        if (event.key === "Enter" || event.key === "Escape") {
            switch (event.key) {
                case "Enter":
                    selectOption(option);
                    break;
                case "Escape": {
                    event.target.blur();
                    break;
                }
                default:
                    return;
            }
        }
    }
    return (
        <Link
            ref={inputRef}
            autoFocus={selected}
            css={settingOptionLinkStyle(selected, theme)}
            to={option}
            aria-selected={selected}
            onMouseDown={handleMouseDown}
            onKeyDown={handleKeyDown}
        >
            {children}
        </Link>
    );
};

const settingOptionLinkStyle = (selected, theme) => css`
  cursor: pointer;
  color: ${selected ? theme.settings.selectedOptionColor : theme.settings.optionColor};
  margin-right: 8px;
  white-space: nowrap;
  font: inherit;
  text-decoration: inherit;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  line-height: unset;
  padding: 15px 12px 12px;
  border-bottom: ${selected ? `3px solid ${theme.settings.selectedOptionBorder}` : 0};
  &:hover, &:focus {
   color: ${theme.settings.optionHover}
  }
`

export default OptionLink;
