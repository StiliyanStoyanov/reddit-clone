import {useEffect, useState} from "react";
import {firestore} from "../firebase";

export function useFetchAll(sort) {
    const [{data, lastIndex}, setData] = useState({data: [], lastIndex: {}});
    const postsCollection = firestore.collectionGroup('posts').limit(12);
    const newSort = postsCollection.orderBy('createdAt', 'desc')
    const topSort = postsCollection.orderBy('upvotes', 'desc').orderBy('createdAt', 'desc')
    const fetchBySort = sort === 'new' ? newSort : topSort;

    const initialFetch = () => {
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
            setData({
                data: fetchedData,
                lastIndex: fetchedData[fetchedData.length - 1].docSnapshot
            })
        })
    }

    const fetchNext = () => {
        return fetchBySort.startAfter(lastIndex).get().then(snapshot => {
            if (snapshot.empty) return null;
            const fetchedData = snapshot.docs.map(post => {
                if (!post.exists) return null;
                return {
                    id: post.id,
                    ...post.data(),
                    docSnapshot: post
                };
            });
            setData(prevData => {
                const {data} = prevData
                return {
                    data: [...data, ...fetchedData],
                    lastIndex: fetchedData[fetchedData.length - 1].docSnapshot
                }
            })
        });
    }
    useEffect(() => {
        initialFetch().catch(error => console.error(error));
    }, [sort]);
    return {data, lastIndex, fetchNext}
}