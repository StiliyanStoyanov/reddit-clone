/** @jsxImportSource @emotion/react */
import {useEffect} from "react";
import {firestore} from "../../../firebase";
import {useCustomParams} from "../../../hooks/useCustomRoutes";
import ViewSelector from "../../shared/ViewSelector/ViewSelector";
import CardsList from "../../shared/PostsCards/CardsList";
import LoadersGroup from "../../Loaders/LoadersGroup";
import NoPostsByUser from "./NoPostsByUser";
import {usePostsDispatch, usePostsStore, postsActions, sorts} from "../../../store/PostsStoreProvider";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";
const {setOptions} = postsActions

const UserContent = ({isAuthUser}) => {
    const {username} = useCustomParams();
    const {view, sort} = useUserStore();
    const store = usePostsStore();
    const postsDispatch = usePostsDispatch();
    const {data, isLoading, isFetching, isError} = store

    useEffect(() => {
        postsDispatch({
            type: setOptions,
            payload: {
                path: firestore.collectionGroup('posts'),
                ...sorts.users[sort](username)
            }
        })
    }, [sort, username, postsDispatch]);

    if (isError) return <div>Sorry something went wrong try again later</div>
    const noPosts = !isLoading && data.length === 0;
    return (
        <>
            <ViewSelector/>
            {isLoading && <LoadersGroup type={view} length={view === "compact" ? 9 : 2}/>}
            {noPosts && <NoPostsByUser type={view}/>}
            <CardsList view={view} data={data}/>
            {isFetching && <LoadersGroup type={view} length={1}/>}
        </>
    );
};

export default UserContent;
