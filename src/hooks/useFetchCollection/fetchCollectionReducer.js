const fetchCollectionActions = {
    setData: "SET_DATA",
    updateData: "UPDATE_DATA",
    insertItem: "INSERT_ITEM",
    pushItem: "PUSH_ITEM",
    removeItem: "REMOVE_DATA_ITEM",
    updateField: "UPDATE_FIELD",
    incrementField: "INCREMENT",
    decrementField: "DECREMENT",
    setOptions: "SET_OPTIONS",
    setFetching: "SET_FETCHING",
    setLoading: "SET_LOADING",
    updateQuery: "UPDATE_QUERY",
    setError: "SET_ERROR"
}
const {
    setData,
    updateData,
    insertItem,
    pushItem,
    removeItem,
    updateField,
    incrementField,
    decrementField,
    setOptions,
    setFetching,
    setLoading,
    updateQuery,
    setError,
} = fetchCollectionActions
const postsLimit = 5;
const userPostsLimit = 2;
const commentsLimit = 3;
const sorts = {
    posts: {
        top: {
            orderBy: "scores",
            order: "desc",
            limit: postsLimit,
            where: {}
        },
        new: {
            orderBy: "createdAt",
            order: "desc",
            limit: postsLimit,
            where: {}
        }
    },
    users: {
        top: username => ({
            orderBy: "scores",
            order: "desc",
            limit: userPostsLimit,
            where: {
                key: "author",
                operator: "==",
                value: username
            }
        }),
        new: username => ({
            orderBy: "createdAt",
            order: "desc",
            limit: userPostsLimit,
            where: {
                key: "author",
                operator: "==",
                value: username
            }
        })
    },
    comments: {
        new: {
            orderBy: "createdAt",
            order: "desc",
            limit: commentsLimit,
            where: {}
        },
        old: {
            orderBy: "createdAt",
            order: "asc",
            limit: commentsLimit,
            where: {}
        }
    }
}
const init = ({path, limit, options}) => {
    return {
        data: [],
        limit: limit ?? null,
        path: path || null,
        error: null,
        orderBy: options.orderBy || null,
        order: options.order || null,
        where: {
            key: options.where?.key ?? null,
            operator: options.where?.operator ?? null,
            value: options.where?.value ?? null
        },
        isError: false,
        isLoading: true,
        isFetching: true,
        isLastIndex: false,
        query: 0,
        ...options
    }
}
const fetchCollectionReducer = (state, action) => {
    switch (action.type) {
        case setData: {
            const {data, isLastIndex} = action.payload
            return {
                ...state,
                data: data,
                isLoading: false,
                isFetching: false,
                isLastIndex: isLastIndex
            }
        }
        case updateData: {
            const {data, isLastIndex} = action.payload;
            return {
                ...state,
                data: [...state.data, ...data],
                isLoading: false,
                isFetching: false,
                isLastIndex
            }
        }
        case insertItem: {
            const item = action.payload
            if (!item || !item.id) {
                console.warn('Invalid data to add provided id is required', item)
                return state;
            }
            return {
                ...state,
                data: [item, ...state.data]
            }
        }
        case pushItem: {
            const item = action.payload
            if (!item || !item.id) {
                console.warn('Invalid data to add provided id is required', item)
                return state;
            }
            return {
                ...state,
                data: [...state.data, item]
            }
        }
        case removeItem: {
            const item = action.payload
            if (!item|| !item.id) {
                console.warn('Invalid data to remove provided id is required', item)
                return state;
            }
            return {
                ...state,
                data: state.data.filter(stateItem => stateItem.id !== item.id)
            };
        }
        case updateField: {
            const {field, newValue} = action.payload;
            return {
                ...state,
                data: state.data.map(item => {
                    return {
                        ...item,
                        [field]: newValue
                    }
                })
            }
        }
        case incrementField: {
            const {id, field} = action.payload;
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            [field]: item[field] + 1
                        }
                    }
                    return item;
                })
            }
        }
        case decrementField: {
            const {id, field} = action.payload;
            return {
                ...state,
                data: state.data.map(item => {
                    if (item.id === id) {
                        return {
                            ...item,
                            [field]: item[field] - 1
                        }
                    }
                    return item;
                })
            }
        }
        case setOptions: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case setFetching: {
            const {isFetching} = state;
            if (isFetching) return state;
            return {
                ...state,
                isFetching: true
            }
        }
        case setLoading: {
            return {
                ...state,
                data: [],
                isLoading: true,
                isFetching: true
            }
        }
        case updateQuery: {
            const {isLoading, isFetching} = state;
            if (isLoading || isFetching) return state;
            return {
                ...state,
                query: state.query + 1
            }
        }
        case setError: {
            const {error} = action.payload
            return {
                ...state,
                isLoading: false,
                isFetching: false,
                isError: true,
                error
            }
        }
        default: {
            console.error("Incorrect useFetchCollection reducer action!")
            return state
        }
    }
}

export {fetchCollectionReducer, init, fetchCollectionActions, sorts}