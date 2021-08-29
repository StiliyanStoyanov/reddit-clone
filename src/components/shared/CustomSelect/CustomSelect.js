/** @jsxImportSource @emotion/react */
import {useEffect, useMemo, useRef} from 'react';
import {css} from "@emotion/react";
import {useCustomSelect} from "../../../hooks/useCustomSelect/useCustomSelect";
import {customSelectActions} from "../../../hooks/useCustomSelect/customSelectReducer";
import SelectedOptions from "./SelectedOptions/SelectedOptions";
import Options from "./Options/Options";
import {categories} from "../../../utils/categories";
import {toast} from "react-toastify";
const {
    focus,
    clearFocus,
    updateInput,
    clearHighlight,
    highlightNext,
    highlightPrevious,
    add,
} = customSelectActions

const CustomSelect = ({register, setValue, primarySelected}) => {
    const optionDefaults = useMemo(() => {
        return categories.filter(category => category !== primarySelected);
    }, [primarySelected]);
    const [state, dispatch, dispatchWithOptionsRefs, optionsRefs] = useCustomSelect(optionDefaults, primarySelected);
    const {userInput, focused, highlight, options, selectedOptions} = state
    const inputRef = useRef();
    const divRef = useRef();
    const notifyCommunityLimit = () => {
        if (selectedOptions.length >= 10) {
            toast.error('You can only have up to 10 topics selected')
        }
    }
    useEffect(() => {
        register('options')
        setValue('options', selectedOptions);
    }, [register, setValue, selectedOptions]);
    const handleInputKeyDown = event => {
        if (event.key === "Enter" || event.key === "ArrowDown" ||
            event.key === "ArrowUp" || event.key === "Escape") {
            event.preventDefault();
            switch (event.key) {
                case "Enter": {
                    const option = highlight ? highlight : userInput;
                    notifyCommunityLimit();
                    dispatch({type: add, payload: {option: option, highlightIndex: state.highlightIndex}});
                    break;
                }
                case "ArrowDown": {
                    dispatchWithOptionsRefs({
                        type: highlightNext
                    });
                    break;
                }
                case "ArrowUp": {
                    dispatchWithOptionsRefs({
                        type: highlightPrevious
                    });
                    break;
                }
                case "Escape": {
                    if (highlight) {
                        dispatch({type: clearHighlight});
                    } else {
                        inputRef.current.blur();
                    }
                    break;
                }
                default:
                    break;
            }
        }
    }
    const handleInputFocus = event => dispatch({type: focus});
    const handleInputChange = event => {
        dispatchWithOptionsRefs({
            type: updateInput, payload: {userInput: event.target.value}
        })
    }
    const handleInputBlur = event => {
        if (event.relatedTarget !== divRef.current) {
            dispatch({type: clearFocus});
        }
    }
    const handleDivMouseDown = event => {
        inputRef.current.focus();
    }
    return (
        <div ref={divRef} css={[div, focused && divFocused]} onClick={handleDivMouseDown} tabIndex={-1}>
            <SelectedOptions selectedOptions={selectedOptions} dispatch={dispatch}/>
            <input
                type="text"
                ref={inputRef}
                css={[input]}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                value={userInput}
                autoComplete="off"
            />
            <Options
                css={focused && css`visibility: visible`}
                optionsRefs={optionsRefs}
                options={options}
                highlight={highlight}
                dispatch={dispatch}
                notify={notifyCommunityLimit}
            />
        </div>
    );
};

const div = theme => css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${theme.border1};
  border-radius: 4px;
  user-select: none;
  padding: 12px 16px 4px;
  label: main-container;
`
const divFocused = theme => css`
  border: 1px solid ${theme.colorHighlight1};
`

const input = theme => css`
  color: ${theme.color1};
  background-color: transparent;
  border: none;
  outline: none;
  user-select: all;
  margin: 2px 8px 3px 0;
  label: select-search-inuput
`

export default CustomSelect;
