/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";

const SuggestedTopics = React.memo(({suggestedTopics, addTopic, highlightedTopic, setHighlightedTopic}) => {
    const handleMouseDown = topic => event => {
        event.preventDefault();
        addTopic(topic);
    }
    const handleMouseEnter = topic => event => {
        setHighlightedTopic(topic);
    }
    const suggestedTopicsList = suggestedTopics.map(topic => {
        return (
            <li css={
                highlightedTopic === topic
                    ? css([liDefault, liHighlight])
                    : liDefault
                }
                key={topic}
                onMouseDown={handleMouseDown(topic)}
                onMouseEnter={handleMouseEnter(topic)}
            >
                {topic}
            </li>
        );
    });
    return (
        <div css={div}>
            <ul css={ul}>
                {suggestedTopicsList.length > 1 && <li css={liSuggestedTopicsLine}>Suggested Topics</li>}
                {suggestedTopicsList}
            </ul>
        </div>
    );
});
const div = css`
  position: relative;
  width: 100%
`
const ul = theme => css`
  list-style: none;
  position: absolute;
  padding: 0;
  margin-top: 6px;
  left: -16px;
  width: calc(100% + 32px);
  max-height: 300px;
  overflow: auto;
  background-color: ${theme.createCommunity.backgroundColor};
  border-color: #343536;
  box-shadow: 0 2px 4px 0 rgba(215, 218, 220, 0.2);
`
const liSuggestedTopicsLine = css`
  color: #818384;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  padding: 12px 16px;
`
const liDefault = css`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 4px 16px;
  user-select: none;
`

const liHighlight = css`
  background-color: #0079d3;
`

export default SuggestedTopics;
