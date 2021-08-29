/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
import {useEffect} from "react";
import {firestore} from "../../../firebase";
import LoadersGroup from "../../Loaders/LoadersGroup";
import CardsList from "../../shared/PostsCards/CardsList";
import {usePostsDispatch, usePostsStore, postsActions, sorts} from "../../../store/PostsStoreProvider";
const {setOptions, updateQuery} = postsActions

const AllPosts = () => {
    const {isLoadingFirestore, sort, view} = useUserStore();
    const {data, isLoading, isFetching, isError} = usePostsStore();
    const dispatch = usePostsDispatch();
    useEffect(() => {
        dispatch({
            type: setOptions,
            payload: {
                path: firestore.collectionGroup('posts'),
                ...sorts.posts[sort]
            }
        });
    }, [sort, dispatch, isLoadingFirestore]);

    if (isError) return <div>Error fetching posts</div>
    if (isLoading) return <LoadersGroup type={view} length={view === "compact" ? 10 : 3}/>
    return (
        <div id="all-posts">
            <CardsList view={view} data={data}/>
            {isFetching &&  <LoadersGroup type={view} length={1}/>}
            <button onClick={() => dispatch({type: updateQuery})}>
                Load More...
            </button>
        </div>
    );
};

export default AllPosts;
