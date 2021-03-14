/** @jsxImportSource @emotion/react */
import {useEffect, useRef, useState, useCallback} from 'react';
import {css, useTheme} from "@emotion/react";
import SuggestedTopics from "./SuggestedTopics";
import SelectedTopics from "./SelectedTopics";
import {validateTopicsLimit} from "../../../../../utils/validateTopicsLimit";

const AdditionalTopicsSelect = ({register, topics}) => {
    const theme = useTheme();
    const inputRef = useRef();
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [focused, setFocused] = useState(false);
    const [suggestedTopics, setSuggestedTopics] = useState(topics);
    const [highlightedTopic, setHighlightedTopic] = useState(null);

    useEffect(() => {
        // The suggested additionalTopics without the user selected ones and matching where the topic includes a substring of the user input
        const topicsFiltered = topics.filter(topic => !selectedTopics.includes(topic) && topic.toLowerCase().includes(userInput.toLowerCase()));
        // Clean up the highlighted topic if its not included in the filtered list
        if (!topicsFiltered.includes(highlightedTopic)) {
            setHighlightedTopic(null);
        }
        setSuggestedTopics([
            ...topicsFiltered,
            userInput ? userInput : []
        ]);
    }, [userInput, selectedTopics, topics]); // eslint-disable-line react-hooks/exhaustive-deps

    const addTopic = useCallback(topic => {
        setSelectedTopics(prevState => {
            if (prevState.includes(topic)) {
                return prevState
            }
            return [...prevState, topic]
        });
    }, []);
    const removeTopic = useCallback(topic => {
        setSelectedTopics(prevState => {
            return prevState.filter(prevTopic => prevTopic !== topic);
        })
    }, []);
    const handleInputFocus = () => setFocused(true);
    const handleInputBlur = () => {
        setFocused(false);
        setHighlightedTopic(null);
    }
    const handleInputKeyDown = event => {
        if (event.key === "Enter" || event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            switch (event.key) {
                case "Enter": {
                    if (highlightedTopic) {
                        addTopic(highlightedTopic);
                    } else if (!highlightedTopic && userInput) {
                        addTopic(userInput);
                    }
                    return;
                }
                case "ArrowUp": {
                    const index = suggestedTopics.indexOf(highlightedTopic);
                    const lastTopic = suggestedTopics[suggestedTopics.length - 1];
                    if (index > 0) {
                        if (index === 0 && suggestedTopics.length > 0) {
                            setHighlightedTopic(lastTopic);
                        } else {
                            const previousTopic = suggestedTopics[index - 1];
                            setHighlightedTopic(previousTopic);
                        }
                    } else {
                        setHighlightedTopic(lastTopic);
                    }
                    return;
                }
                case "ArrowDown": {
                    const index = suggestedTopics.indexOf(highlightedTopic);
                    const firstTopic = suggestedTopics[0];
                    if (index >= 0) {
                        if (index + 1 > suggestedTopics.length - 1) {
                            setHighlightedTopic(firstTopic);
                        } else {
                            setHighlightedTopic(suggestedTopics[index + 1]);
                        }
                    } else {
                        setHighlightedTopic(firstTopic);
                    }
                    return;
                }
                default: {
                    return;
                }

            }
        }
    }
    const handleDivMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
    }
    const handleInputChange = event => {
        setUserInput(event.target.value);
    }
    return (
        <div css={css([divContainerStyle(focused)])} onMouseDown={handleDivMouseDown}>
            <SelectedTopics selectedTopics={selectedTopics} removeTopic={removeTopic}/>
            <input
                ref={inputRef}
                css={css([inputStyle, {color: theme.color}])}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                onChange={handleInputChange}
                value={userInput}
                autoComplete="off"
            />
            <input ref={register({
                validate: validateTopicsLimit
            })} name="additionalTopics" type="hidden" value={JSON.stringify(selectedTopics)}/>
            {focused && <SuggestedTopics suggestedTopics={suggestedTopics} addTopic={addTopic} highlightedTopic={highlightedTopic} setHighlightedTopic={setHighlightedTopic}/>}
        </div>
    );
};

const divContainerStyle = focused => css`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  border: 1px solid ${focused ? '#d7dadc' : '#343536'};
  user-select: none;
  border-radius: 4px;
  padding: 12px 16px 4px;
`

const inputStyle = css`
  background-color: transparent;
  border: none;
  outline: none;
  margin: 2px 8px 10px 0
`



export default AdditionalTopicsSelect;
