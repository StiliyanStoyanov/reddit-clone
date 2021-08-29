import {useEffect} from "react";
import {firestore} from "../../../firebase";
import {useCustomParams} from "../../../hooks/useCustomRoutes";
import CardsList from "../../shared/PostsCards/CardsList";
import LoadersGroup from "../../Loaders/LoadersGroup";
import {usePostsDispatch, usePostsStore, postsActions, sorts} from "../../../store/PostsStoreProvider";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
const {setOptions, updateQuery} = postsActions
const PostsListing = () => {
    const {isLoadingFirestore, sort, view} = useUserStore();
    const {communityId} = useCustomParams();
    const {data, isLoading, isFetching, isError} = usePostsStore();
    const dispatch = usePostsDispatch();
    useEffect(() => {
        if (isLoadingFirestore) return;
        if (communityId) {
            dispatch({
                type: setOptions,
                payload: {
                    path: firestore.collection(`communities/${communityId}/posts`),
                    ...sorts.posts[sort]
                }
            });
        } else {
            dispatch({
                type: setOptions,
                payload: {
                    path: firestore.collectionGroup('posts'),
                    ...sorts.posts[sort]
                }
            });
        }
    }, [sort, communityId, isLoadingFirestore, dispatch]);

    if (isError) return <div>Something went wrong</div>
    if (isLoading) return <LoadersGroup type={view} length={view === "compact" ? 10 : 3}/>
    return (
        <div id="posts-listing-container">
            <CardsList view={view} data={data}/>
            {isFetching &&  <LoadersGroup type={view} length={1}/>}
            <button onClick={() => dispatch({type: updateQuery})}>
                Load More...
            </button>
        </div>
    );
};

export default PostsListing;
