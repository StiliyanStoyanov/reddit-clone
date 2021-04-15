export const communitySelectorActions = {
    updateInput: "UPDATE_INPUT",
    setFetching: "SET_FETCHING",
    openDropdown: "OPEN_DROPDOWN",
    closeDropdown: "CLOSE_DROPDOWN",
    toggleDropdown: "TOGGLE_DROPDOWN",
    updateCommunities: "UPDATE_COMMUNITIES",
    clearAndClose: "CLEAR_AND_CLOSE",
}
const {
    updateInput,
    setFetching,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    updateCommunities,
    clearAndClose,
} = communitySelectorActions

export const communitySelectorReducer = (state, action) => {
    switch (action.type) {
        case updateInput: {
            const {userInput} = action.payload;
            return {
                ...state,
                open: true,
                userInput
            }
        }
        case setFetching: {
            const {isFetching} = action.payload;
            return {
                ...state,
                isFetching
            }
        }
        case updateCommunities: {
            const {communities, skipQueryParams} = state
            const {data, char} = action.payload
            const alreadyFetched = skipQueryParams.some(letter => letter === char);
            if (alreadyFetched) return state;
            // // Useful if the query is debounced only, instead of making a filter to skip a fetch
            // // And no caching is enabled.
            // const updatedCommunities = [
            //     ...communities,
            //     data.filter(dataCommunity => {
            //         communities.some(memoCommunity => memoCommunity.id !== dataCommunity.id);
            //     })
            // ]
            return {
                ...state,
                communities: communities.concat(data),
                skipQueryParams: skipQueryParams.concat(char),
                isFetching: false
            };
        }
        case clearAndClose: {
            return {
                ...state,
                highlight: null,
                open: false
            }
        }
        case openDropdown: {
            const {open} = state
            if (open) return state;

            return {
                ...state,
                open: true
            }
        }
        case closeDropdown: {
            const {open} = state
            if (!open) return state;

            return  {
                ...state,
                open: false
            }
        }
        case toggleDropdown: {
            const {open} = state
            return {
                ...state,
                open: !open
            }
        }
        default: {
            console.error("INVALID REDUCER ACTION!!!")
            return state
        }
    }
}
export const init = initial => {
    return {
        ...initial,
        open: false,
        userInput: "",
        communities: [],
        skipQueryParams: [],
        isFetching: false
    }
}