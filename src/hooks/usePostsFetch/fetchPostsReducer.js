const actions = {
    setData: "SET_DATA",
    updateData: "UPDATE_DATA",
    loadMore: "LOAD_MORE",
    initFetch: "INIT_FETCH",
    setFetching: "SET_FETCHING",
    setError: "SET_ERROR",
    setIdle: "SET_IDLE",
    setLastIndex: "SET_LAST_INDEX",
    setCommunityNotFound: "SET_COMMUNITY_NOT_FOUND",
    setCommunity: "SET_COMMUNITY"
}
const {
    setData,
    updateData,
    loadMore,
    initFetch,
    setFetching,
    setError,
    setIdle,
    setLastIndex,
    setCommunityNotFound,
    setCommunity
} = actions
const initialState = {
    data: [],
    community: null,
    startAfterIndex: null,
    isLoading: true,
    isFetching: false,
    isError: false,
    isLastIndex: false,
    communityNotFound: false,
    query: 0
}
const init = initialState => {
    return initialState;
}
const fetchPostsReducer = (state, action) => {
    const {data, query} = state
    const {payload} = action
    switch (action.type) {
        case setData: {
            return {
                ...state,
                data: payload,
                startAfterIndex: payload[payload.length - 1].docSnapshot,
                isFetching: false,
                isLoading: false
            }
        }
        case updateData: {
            return {
                ...state,
                data: [...data, ...payload],
                startAfterIndex: payload[payload.length - 1].docSnapshot,
                isFetching: false,
                isLoading: false
            }
        }
        case loadMore: {
            return {
                ...state,
                query: query + 1
            }
        }
        case initFetch: {
            return {
                ...state,
                isLoading: true,
                isFetching: true,
                isLastIndex: false,
                communityNotFound: false,
                community: null
            }
        }
        case setFetching: {
            return {
                ...state,
                isFetching: true
            }
        }
        case setError: {
            return {
                ...state,
                isError: true
            }
        }
        case setIdle: {
            return {
                ...state,
                isFetching: false,
                isLoading: false
            }
        }
        case setLastIndex: {
            return {
                ...state,
                isFetching: false,
                isLoading: false,
                isLastIndex: true
            }
        }
        case setCommunityNotFound: {
            return {
                ...state,
                communityNotFound: true,
                isFetching: false,
                isLoading: false
            }
        }
        case setCommunity: {
            return {
                ...state,
                community: payload
            }
        }
        default: {
            return state
        }
    }
}

export {fetchPostsReducer, initialState, init, actions}