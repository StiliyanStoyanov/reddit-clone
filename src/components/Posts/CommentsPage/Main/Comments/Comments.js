/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {memo, useCallback, useRef, useState} from "react";
import {firestore} from "../../../../../firebase";
import {useParams} from "react-router";
import {fetchCollectionActions, sorts} from "../../../../../hooks/useFetchCollection/useFetchCollection";
import {usePostsDispatch} from "../../../../../store/PostsStoreProvider";
import CommentsSortSelect from "./CommentsSortSelect/CommentsSortSelect";
import CommentCard from "./CommentCard/CommentCard";
import CommentFormContainer from "../CommentsForm/CommentFormContainer";
import {useFetchCollection} from "../../../../../hooks/useFetchCollection/useFetchCollection";
import NoComments from "./NoComments/NoComments";
import CommentLoaders from "./CommentLoaders";
const {updateQuery, insertItem, pushItem, removeItem, incrementField, decrementField} = fetchCollectionActions

const Comments = memo(() => {
    const {communityId, postId} = useParams();
    const path = useRef(firestore.collection(`communities/${communityId}/posts/${postId}/comments`))
    const [activeSort, setActiveSort] = useState("New");
    const [{data, error, isLoading, isLastIndex}, commentsDispatch] = useFetchCollection(
        path.current,
        3,
        sorts.comments.new
    );
    const postsDispatch = usePostsDispatch();
    const addComment = useCallback((comment) => {
        if (activeSort === "New") {
            commentsDispatch({type: insertItem, payload: comment});
        } else if (activeSort === "Old") {
            commentsDispatch({type: pushItem, payload: comment});
        }
        postsDispatch({type: incrementField, payload: {id: postId, field: 'commentsCount'}});
    }, [postId, activeSort, commentsDispatch, postsDispatch]);

    const removeComment = useCallback((comment) => {
        commentsDispatch({type: removeItem, payload: comment})
        postsDispatch({type: decrementField, payload: {id: postId, field: 'commentsCount'}})
    }, [postId, commentsDispatch, postsDispatch])

    const loadMore = () => commentsDispatch({type: updateQuery});
    if (error) return <p>Error loading the comment please try again later</p>
    return (
        <>
            <CommentFormContainer addComment={addComment} removeComment={removeComment}/>
            <div css={[container]}>
                <CommentsSortSelect
                    activeSort={activeSort}
                    commentsDispatch={commentsDispatch}
                    setActiveSort={setActiveSort}
                />
                {isLoading && <CommentLoaders/>}
                {data.length === 0 && !isLoading && <NoComments/>}
                {data.map(comment => (
                    <CommentCard
                        key={comment.id}
                        comment={comment}
                        removeComment={removeComment}
                        addComment={addComment}
                    />
                ))}
                {!isLoading && !isLastIndex && <button onClick={loadMore}>Load More...</button>}
            </div>
        </>
    );
});

const container = css`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  padding: 0 8px;
`

export default Comments;
