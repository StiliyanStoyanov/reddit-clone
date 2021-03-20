export const customSelectActions = {
    focus: 'FOCUS',
    clearFocus: 'CLEAR_FOCUS',
    updateInput: 'UPDATE_INPUT',
    setHighlight: 'SET_HIGHLIGHT',
    setHighlightRef: 'SET_HIGHLIGHT_REF',
    clearHighlight: 'CLEAR_HIGHLIGHT',
    highlightNext: 'HIGHLIGHT_NEXT',
    highlightPrevious: 'HIGHLIGHT_PREVIOUS',
    add: 'ADD',
    remove: 'REMOVE',
    reset: 'RESET'
}
const {
    focus,
    clearFocus,
    updateInput,
    setHighlight,
    clearHighlight,
    highlightNext,
    highlightPrevious,
    add,
    remove,
    reset
} = customSelectActions
export const customSelectReducer = (state, action) => {
    const {highlight, highlightIndex, options, selectedOptions, optionsExcludingSelected, optionsDefault} = state
    const {payload} = action
    switch (action.type) {
        case focus: {
            return {
                ...state,
                focused: true
            }
        }
        case clearFocus: {
            return {
                ...state,
                highlight: null,
                focused: false
            }
        }
        case updateInput: {
            const {userInput} = payload

            if (userInput === "") {
                const newHighlight = null
                const newHighlightIndex = -1;
                return {
                    ...state,
                    highlight: newHighlight,
                    highlightIndex: newHighlightIndex,
                    options: [...optionsExcludingSelected],
                    userInput: userInput
                };
            } else {
                const newOptions = [
                    ...optionsExcludingSelected.filter(item => {
                        return item.toLowerCase().includes(userInput.toLowerCase())
                    }),
                    userInput
                ]
                let newHighlight = null
                let newHighlightIndex = -1;
                const index = newOptions.indexOf(highlight);

                if (highlight) {
                    if (index >= 0) {
                        newHighlight = newOptions[index];
                        newHighlightIndex = index;
                    } else if (newOptions[newOptions.length - 1].startsWith(userInput)) {
                        newHighlight = newOptions[newOptions.length - 1];
                        newHighlightIndex = newOptions.length - 1;
                    }
                }

                return {
                    ...state,
                    userInput: userInput,
                    highlight: newHighlight,
                    highlightIndex: newHighlightIndex,
                    options: newOptions
                };
            }
        }
        case setHighlight: {
            const {option, optionIndex} = payload
            if (option === highlight && optionIndex === highlightIndex) {
                return state;
            }
            return {
                ...state,
                highlight: option,
                highlightIndex: optionIndex
            };
        }
        case clearHighlight: {
            return {
                ...state,
                highlight: null,
                highlightIndex: -1
            }
        }
        case highlightNext: {
            //optionsRefs is a mirror array to the options array containing the ref to each option
            const {optionsRefs} = payload
            if (!optionsRefs) {
                console.error('missing refs array');
                return state
            }
            // Exit if no options are available
            if (options.length <= 0) {
                return state
            }
            // Exit if there is only 1 element and its highlighted already
            if (options.length - 1 === 0 && highlight) {
                return state;
            }

            if (highlightIndex + 1 > options.length - 1) {
                // Reached last element move to first
                const element = optionsRefs[0];
                element.scrollIntoView({block: "end"});
                return {
                    ...state,
                    highlight: options[0],
                    highlightIndex: 0
                }
            } else {
                // Move to next
                const element = optionsRefs[highlightIndex + 1];
                element.scrollIntoView({block: "nearest"});
                return {
                    ...state,
                    highlight: options[highlightIndex + 1],
                    highlightIndex: highlightIndex + 1
                }
            }
        }
        case highlightPrevious: {
            const {optionsRefs} = payload
            if (!optionsRefs) {
                console.error('missing refs array');
                return state
            }
            // Exit if no options are available
            if (options.length <= 0) {
                return state
            }
            // Exit if there is only 1 element and its highlighted already
            if (options.length - 1 === 0 && highlight) {
                return state;
            }

            if (highlightIndex - 1 >= 0) {
                // Move to previous
                const previousElement = highlightIndex - 1
                const element = optionsRefs[highlightIndex - 1];
                element.scrollIntoView({block: "nearest"});
                return {
                    ...state,
                    highlight: options[previousElement],
                    highlightIndex: previousElement
                };
            } else {
                // Reached first element move to last
                const lastElement = options.length - 1;
                const element = optionsRefs[lastElement];
                element.scrollIntoView({block: "nearest"});
                return {
                    ...state,
                    highlight: options[lastElement],
                    highlightIndex: lastElement
                };
            }
        }
        case add: {
            if (typeof payload !== 'object') {
                console.error('attach option and index object on event handler');
                return state;
            }
            if (selectedOptions.length >= 25) {
                return state;
            }
            const {option, highlightIndex} = payload;
            const alreadySelected = selectedOptions.some(o => o === option);
            if (alreadySelected || !option) return state;

            const newSelectedOptions = [...selectedOptions, option];
            const newOptionsExcludingSelected = optionsDefault.filter(defaultOption => !newSelectedOptions.includes(defaultOption));
            let newHighlight = null;
            let newHighlightIndex = -1;
            // highlight management
            // newOptionsExcludingSelected.length > 0 (check for options left to highlight)
            // highlightIndex >= 0 (edge case to skip updating highlight when pressing enter without a highlight but with userInput)
            if (newOptionsExcludingSelected.length > 0 && highlightIndex >= 0) {
                if (highlightIndex > newOptionsExcludingSelected.length - 1) {
                    // is out of bound - is old list last index, highlight new list last index
                    newHighlight = newOptionsExcludingSelected[newOptionsExcludingSelected.length - 1];
                    newHighlightIndex = newOptionsExcludingSelected.length - 1
                } else {
                    // is in bound - highlight new list item with the same index of the old one
                    newHighlight = newOptionsExcludingSelected[highlightIndex];
                    newHighlightIndex = highlightIndex
                }
            }

            return {
                ...state,
                userInput: "",
                highlight: newHighlight,
                highlightIndex: newHighlightIndex,
                optionsExcludingSelected: newOptionsExcludingSelected,
                options: [...newOptionsExcludingSelected],
                selectedOptions: newSelectedOptions
            };
        }
        case remove: {
            if (!payload) return state;
            const {selectedOption} = payload
            const newSelectedOptions = selectedOptions.filter(o => o !== selectedOption);
            const newOptionsExcludingSelected = optionsDefault.filter(option => !newSelectedOptions.includes(option));

            return {
                ...state,
                userInput: "",
                optionsExcludingSelected: newOptionsExcludingSelected,
                options: [...newOptionsExcludingSelected],
                selectedOptions: newSelectedOptions
            }
        }
        case reset: {
            return init(action.payload);
        }
        default: {
            return state
        }
    }
}
export const init = initialState => {
    const {optionsDefault} = initialState
    return {
        ...initialState,
        userInput: "",
        focused: false,
        highlightIndex: -1,
        highlight: null,
        optionsExcludingSelected: [...optionsDefault],
        options: [...optionsDefault],
        selectedOptions: [],
    }
}