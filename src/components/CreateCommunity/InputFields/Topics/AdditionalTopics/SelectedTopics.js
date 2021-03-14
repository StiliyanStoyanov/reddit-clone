/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import {faTimes} from "@fortawesome/free-solid-svg-icons/faTimes";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SelectedTopics = React.memo(({selectedTopics, removeTopic}) => {
    const handleKeyDown = eventTopic => event => {
        // Prevent the default behaviour of the key down on selected key events
        // Enter event is included so it doesn't submit the form
        if (event.key === "Backspace" || event.keyCode === 8 || event.key === "Enter") {
            event.preventDefault();
            // Remove a selected topic from the list if the event is backspace
            if (event.key === "Backspace") {
                removeTopic(eventTopic);
            }
        }
    }
    const handleMouseDown = eventTopic => event => {
        // Remove a selected topic from the list on clicking it
        removeTopic(eventTopic);
    }
    const selectedTopicsList = selectedTopics.map(topic => (
        <div css={divItemDefault} key={topic} onKeyDown={handleKeyDown(topic)} onMouseDown={handleMouseDown(topic)} tabIndex={0}>
            {topic}
            <FontAwesomeIcon css={icon} icon={faTimes}/>
        </div>
    ));
    return (
        <>
            {selectedTopicsList}
        </>
    )
});
const divItemDefault = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #d7dadc;
  background-color: #272729;
  border: 1px solid transparent;
  border-radius: 2px;
  padding: 2px 8px;
  text-align: center;
  margin-right: 8px;
  margin-bottom: 8px;
  &:focus, &:active, &:hover {
    outline: none;
    color: #1a1a1b;
    background-color: #0079d3;
  }
`

const icon = css`
  width: 12px;
  height: 12px;
  color: #818384;
  margin-left: 4px;
  margin-top: 2px;
`

export default SelectedTopics;
