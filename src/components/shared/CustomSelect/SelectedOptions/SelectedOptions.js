/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {customSelectActions} from "../../../../hooks/useCustomSelect/customSelectReducer";
const {remove} = customSelectActions

const SelectedOptions = React.memo(({selectedOptions, dispatch}) => {
    const handleKeyDown = ({selectedOption, index},event) => {
        if (event.key === "Backspace" || event.key === "Enter") {
            event.preventDefault();
            dispatch({type: remove, payload: {selectedOption, index}});
        }
    }
    const handleMouseDown = ({selectedOption, index}, event) => {
        dispatch({type: remove, payload: {selectedOption, index}});
    }

    return (
        <>
            {selectedOptions.map((selectedOption, index) => (
                <div
                    css={[div]}
                    key={selectedOption}
                    onKeyDown={(event) => handleKeyDown(
                        {selectedOption, index}, event
                    )}
                    onMouseDown={(event => handleMouseDown(
                        {selectedOption, index}, event
                    ))} tabIndex={0}
                >
                    <span>{selectedOption}</span>
                    <FontAwesomeIcon css={icon} icon={faTimes}/>
                </div>
            ))}
        </>
    )
});
const div = theme => css`
  cursor: pointer;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  color: ${theme.colorHighlight2};
  background-color: ${theme.background3};
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px 8px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 8px;
  &:focus, &:active, &:hover {
    outline: none;
    color: ${theme.backgroundGlobal};
    background-color: ${theme.colorDarkerBlue};
    svg {
      outline: none;
      color: ${theme.backgroundGlobal};
      background-color: ${theme.colorDarkerBlue};
    }
  }
  
`

const icon = css`
  position: relative;
  z-index: 0;
  width: 12px;
  height: 12px;
  color: #818384;
  margin-left: 4px;
  margin-top: 2px;
`

export default SelectedOptions;
