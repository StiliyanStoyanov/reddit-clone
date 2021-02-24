import {useEffect, useState} from "react";
import {firestore} from "../firebase";

export function useFetchAll(sort) {
    const initialState = {
        data: [],
        startAfterIndex: {},
        isFetching: false,
        isLastIndex: false
    };
    const [{data, startAfterIndex, isFetching, isLastIndex}, setState] = useState(initialState);
    const postsCollection = firestore.collectionGroup('posts').limit(10);
    const newSort = postsCollection.orderBy('createdAt', 'desc')
    const topSort = postsCollection.orderBy('upvotes', 'desc').orderBy('createdAt', 'desc')
    const fetchBySort = sort === 'new' ? newSort : topSort;

    const fetchInitialized = () => {
        return setState(prevState => {
            return {
                ...prevState,
                isFetching: true
            }
        });
    }
    const noMoreIndexes = () => {
        return setState(prevState => {
            return {
                ...prevState,
                isFetching: false,
                isLastIndex: true
            }
        });
    }

    const initialFetch = () => {
        fetchInitialized();
        return fetchBySort.get().then(snapshot => {
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
                return {
                    ...prevState,
                    data: fetchedData,
                    startAfterIndex: fetchedData[fetchedData.length - 1].docSnapshot,
                    isFetching: false
                }
            })
        })
    }

    const fetchNext = () => {
        if (isFetching || isLastIndex) return null;
        fetchInitialized();
        return fetchBySort.startAfter(startAfterIndex).get().then(snapshot => {
            if (snapshot.empty) return noMoreIndexes();
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
                    lastIndex: fetchedData[fetchedData.length - 1].docSnapshot,
                    isFetching: false
                }
            })
        });
    }

    useEffect(() => {
        initialFetch().catch(error => console.error(error));
    }, [sort]);

    return {data, fetchNext}
}