/** @jsxImportSource @emotion/react */
import {useCallback, useRef} from 'react';
import {css} from "@emotion/react";
import {useCustomSelect} from "../../../hooks/useCustomSelect/useCustomSelect";
import {customSelectActions} from "../../../hooks/useCustomSelect/customSelectReducer";
import SelectedOptions from "./SelectedOptions/SelectedOptions";
import Options from "./Options/Options";
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

const CustomSelect = ({register, optionsDefault}) => {
    const [state, dispatch, dispatchWithOptionsRefs, optionsRefs] = useCustomSelect(optionsDefault);
    const {userInput, focused, highlight, options, selectedOptions} = state
    const inputRef = useRef();
    const divRef = useRef();

    const notify = useCallback((option) => {
        if (selectedOptions.length >= 25 && option) {
            toast('Cannot exceed Topics limit of 25', {
                hideProgressBar: true,
                position: "bottom-center"
            });
        }
    }, [selectedOptions])
    const handleInputKeyDown = event => {
        if (event.key === "Enter" || event.key === "ArrowDown" ||
            event.key === "ArrowUp" || event.key === "Escape") {
            event.preventDefault();
            switch (event.key) {
                case "Enter": {
                    const option = highlight ? highlight : userInput;
                    notify(option);
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
    const handleInputFocus = event => dispatch({type: focus})
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
        <div ref={divRef} css={[div(focused)]} onClick={handleDivMouseDown} tabIndex={-1}>
            <SelectedOptions selectedOptions={selectedOptions} dispatch={dispatch}/>
            <input
                type="text"
                ref={inputRef}
                css={[input]}
                onFocusCapture={handleInputFocus}
                onBlurCapture={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                value={userInput}
                autoComplete="off"
            />
            <input {...register("selectedOptions")} type="hidden" value={JSON.stringify(selectedOptions)}/>
            <Options
                css={focused && css`visibility: visible`}
                optionsRefs={optionsRefs}
                options={options}
                highlight={highlight}
                dispatch={dispatch}
                notify={notify}
            />
        </div>
    );
};

const div = focused => css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${focused ? '#d7dadc' : '#343536'};
  border-radius: 4px;
  user-select: none;
  padding: 12px 16px 4px;
  label: main-container;
`

const input = theme => css`
  color: ${theme.color1};
  background-color: transparent;
  border: none;
  outline: none;
  user-select: all;
  margin: 2px 8px 10px 0;
  label: select-search-inuput
`

export default CustomSelect;
