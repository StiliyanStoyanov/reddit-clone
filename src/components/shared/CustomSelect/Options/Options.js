/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import {customSelectActions} from "../../../../hooks/useCustomSelect/customSelectReducer";

const {setHighlight, clearHighlight, add} = customSelectActions

const Options = React.memo(({optionsRefs, options, highlight, dispatch, className, notify}) => {
    const handleMouseDown = ({option, optionIndex}, event) => {
        event.preventDefault();
        notify(option);
        dispatch({type: add, payload: {option: highlight, highlightIndex: optionIndex}})
    }
    const handleMouseEnter = ({option, optionIndex}, event) => {
        dispatch({
            type: setHighlight,
            payload: {
                option,
                optionIndex
            }
        })
    }
    const handleMouseLeave = event => dispatch({type: clearHighlight})

    return (
        <div
            css={[outerDiv]}
            className={className}
        >
            <ul css={ul}>
                {options.length > 1 && <li css={liSuggested}>Suggested Topics</li>}
                {options.map((option, i) => {
                    const isSelected = option === highlight
                    return (
                        <li css={[liDefault, isSelected && liHighlight]}
                            key={option}
                            ref={el => optionsRefs.current[i] = el}
                            onMouseDown={(event) => handleMouseDown(
                                {option, optionIndex: i}, event
                            )}
                            onMouseEnter={(event) => handleMouseEnter(
                                {option, optionIndex: i}, event
                            )}
                            onMouseLeave={handleMouseLeave}
                            data-selected={isSelected}
                        >
                            {option}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});
const outerDiv = css`
  position: relative;
  visibility: hidden;
  width: 100%;
  label: options-main-container
`
const ul = theme => css`
  list-style: none;
  position: absolute;
  padding: 0;
  margin: 5px 0 0;
  left: -16px;
  width: calc(100% + 32px);
  border-color: #343536;
  box-shadow: 0 2px 4px 0 rgba(215, 218, 220, 0.2);
  max-height: 300px;
  overflow: auto;
  background-color: ${theme.createCommunity.backgroundColor};
  label: options-ul;
`
const liSuggested = css`
  color: #818384;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  padding: 12px 16px;
  label: options-li-suggested-topic-line;
`
const liDefault = css`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 4px 16px;
  user-select: none;
  label: options-li;
`

const liHighlight = css`
  background-color: #0079d3;
  label: -highlight;
`
export default Options;
