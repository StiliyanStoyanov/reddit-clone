import {useEffect, useState} from "react";
import {firestore} from "../firebase";

export function useFetchSingle(sort, communityId) {
    const initialState = {
        data: [],
        startAfterIndex: {},
        communityExists: false,
        loading: true,
        isFetching: false,
        isLastIndex: false
    };
    const [state, setState] = useState(initialState);
    const {data, startAfterIndex, communityExists, loading, isFetching, isLastIndex} = state
    const communityPath = firestore.doc(`communities/${communityId}`);
    const communityPosts = communityPath.collection('posts').limit(3);
    const newSort = communityPosts.orderBy('createdAt', 'desc')
    const topSort = communityPosts.orderBy('upvotes', 'desc').orderBy('createdAt', 'desc')
    const fetchBySort = sort === 'new' ? newSort : topSort;

    const fetchInitialized = () => {
        return setState(prevState => {
            return {
                ...prevState,
                isFetching: true
            }
        });
    }
    const communityNotFound = () => {
        setState({
            ...initialState,
            loading: false,
        })
    }
    const noMoreIndexes = () => {
        return setState(prevState => {
            return {
                ...prevState,
                communityExists: true,
                loading: false,
                isLastIndex: true
            }
        })
    }

    const initialFetch = async () => {
        fetchInitialized();
        const community = await communityPath.get()
        if (!community.exists) {
            communityNotFound();
        }
        return fetchBySort.get().then(snapshot => {
            if (snapshot.empty) {
                noMoreIndexes();
            }
            const fetchedData = snapshot.docs.map(post => {
                if (!post.exists) return null;
                return {
                    id: post.id,
                    ...post.data(),
                    docSnapshot: post
                };
            });
            setState(prevState => {
                return {
                    ...prevState,
                    data: fetchedData,
                    startAfterIndex: fetchedData[fetchedData.length - 1].docSnapshot,
                    communityExists: true,
                    loading: false,
                    isFetching: false,
                }
            })
        })
    }

    const fetchNext = () => {
        console.log(state, 'before init');
        if (!communityExists || isFetching || isLastIndex) return null;
        fetchInitialized();
        console.log(state, 'after init');
        return fetchBySort.startAfter(startAfterIndex).get().then(snapshot => {
            if (snapshot.empty) return null;
            const fetchedData = snapshot.docs.map(post => {
                if (!post.exists) return null;
                return {
                    id: post.id,
                    ...post.data(),
                    docSnapshot: post
                };
            });
            setState(prevState => {
                const {data} = prevState
                return {
                    ...prevState,
                    data: [...data, ...fetchedData],
                    startAfterIndex: fetchedData[fetchedData.length - 1].docSnapshot
                }
            });
        });
    }
    useEffect(() => {
        initialFetch().catch(error => console.error(error));
    }, [sort]);
    return {data, communityExists, loading, fetchNext}
}