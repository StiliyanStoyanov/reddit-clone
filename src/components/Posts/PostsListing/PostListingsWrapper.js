/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import PostsListing from "./PostListing";
import CommunityBarIntermediate from "../../CommunityBar/CommunityBarIntermediate";
import ViewSelector from "../../shared/ViewSelector/ViewSelector";
import {useCommunityStore} from "../../../store/CommunityStore/CommunityStoreProvider";
import {useCustomParams} from "../../../hooks/useCustomRoutes";
import CommunityNotFound from "../CommunityNotFound";
import CommunityPageAbout from "../CommunityPageAbout";

const PostListingsWrapper = () => {
    const {isLoading, community} = useCommunityStore();
    const {communityId} = useCustomParams();
    if (communityId && !community && !isLoading) {
        return <CommunityNotFound/>
    }
    return (
        <>
            <div css={theme => css`background-color: ${theme.background3};`}>
                <div css={css`max-width: 1200px; margin: 0 auto`}>
                    <CommunityBarIntermediate community={community}/>
                </div>
            </div>
            <div css={content_layout}>
                <main>
                    <ViewSelector/>
                    <PostsListing/>
                </main>
                <aside>
                    <CommunityPageAbout/>
                </aside>
            </div>
        </>

    );
};

const content_layout = css`
  display: flex;
  max-width: 1200px; 
  flex-grow: 1;
  justify-content: center;
  margin:0 auto;
  main {
    flex-basis: 69%;
    margin: 16px;
  }
  aside {
    flex-basis: 30%;
    margin: 16px;
  }
  @media (max-width: 1100px) {
    main {
      flex-basis: 98%;
    }
    aside {
      display: none;
    }
  }
`

export default PostListingsWrapper;
