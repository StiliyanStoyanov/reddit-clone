/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import ViewSelector from "../../shared/ViewSelector/ViewSelector";
import CommunityBarIntermediate from "../../CommunityBar/CommunityBarIntermediate";
import CommunityPageAbout from "../CommunityPageAbout";
import {useCommunityStore} from "../../../store/CommunityStore/CommunityStoreProvider";
import CommunityNotFound from "../CommunityNotFound";
import CommunityPosts from "./CommunityPosts";
import CommunityBar from "../../CommunityBar/CommunityBar";

const CommunityPage = () => {
    const {community, isLoading} = useCommunityStore();
    if (!community && !isLoading) return <CommunityNotFound/>;
    return (
        <>
            <div css={theme => css`background-color: ${theme.background3};`}>
                <div css={container}>
                    {community && <CommunityBar community={community}/>}
                </div>
            </div>
            <div css={posts_layout_container}>
                <main>
                    <ViewSelector/>
                    <CommunityPosts/>
                </main>
                <aside>
                    <CommunityPageAbout/>
                </aside>
            </div>
        </>

    );
};
const container = css`
  max-width: 1200px;
  margin: 0 auto;
`
const posts_layout_container = css`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  main {
    flex-basis: 70%;
    margin: 16px;
  }
  aside {
    flex-basis: 30%;
    margin: 16px;
  }
  @media (max-width: 1100px) {
    main {
      flex-basis: 100%;
    }
    aside {
      display: none;
    }
  }
`

export default CommunityPage;
