/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useEffect, useMemo, useRef} from "react";
import CloseButton from "./Misc/CloseButton";
import PostContent from "./Main/PostContent/PostContent";
import Comments from "./Main/Comments/Comments";
import CommunityInfo from "./Aside/CommunityInfo/CommunityInfo";
import {useParams} from "react-router";
import {usePostsStore, postsActions, usePostsDispatch} from "../../../store/PostsStoreProvider";
import {firestore} from "../../../firebase";
import PostNotFound from "./Misc/PostNotFound";
import CommentsPageSpinner from "./CommentsPageSpinner";
const {setData} = postsActions

const CommentsPage = () => {
    const {data, isLoading} = usePostsStore();
    const postsDispatch = usePostsDispatch();
    const {communityId, postId} = useParams();
    const postPath = useRef(firestore.doc(`communities/${communityId}/posts/${postId}`));
    const post = useMemo(() => {
        return data.find(item => item.id === postId);
    }, [postId, data]);
    const fromFeed = useRef(!!post);

    useEffect(() => {
        if (post) return;
        postPath.current.get().then(doc => {
            if (doc.exists) {
                const post = {id: doc.id, ...doc.data(), docSnapshot: doc}
                postsDispatch({type: setData, payload: {data: [post]}})
            } else {
                postsDispatch({type: setData, payload: {data: []}})
            }
        })
    }, [post, postsDispatch]);

    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden"
        return () => {
            body.style.overflow = null
        }
    }, []);
    if (isLoading) return <CommentsPageSpinner/>
    if (!post) return <PostNotFound/>
    return (
        <div css={[page_container]}>
            <div css={[items_container]}>
                <CloseButton fromFeed={fromFeed.current}/>
                <main css={[main]}>
                    {isLoading && <div>Loading...</div>}
                    <PostContent post={post}/>
                    <Comments/>
                </main>
                <aside css={[aside]}>
                    <CommunityInfo/>
                </aside>
            </div>
        </div>
    );
};
const aside = css`
  width: 350px;
  margin-right: 10px;
  @media (max-width: 960px) {
    display: none;
  }
  label: aside-spv
`

const main = theme => css`
  position: relative;
  margin: 0 10px;
  padding: 12px;
  border-radius: 4px;
  width: 800px;
  @media (max-width: 960px) {
    margin: 0;
  }
  background-color: ${theme.background1};
  label: main-spv
`

const page_container = theme => css`
  position: fixed;
  top: 71px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: calc(100vh - 71px);
  z-index: 3;
  background-color: ${theme.backgroundGlobal};
  label: page-container;
`
const items_container = css`
  position: relative;
  min-width: 340px;
  display: flex;
  justify-content: center;
  max-width: 1260px;
  margin: 0 auto;
  padding-top: 12px;
  background-color: royalblue;
  label: items-container;
`

export default CommentsPage;
