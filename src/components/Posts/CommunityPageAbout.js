/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useCommunityStore} from "../../store/CommunityStore/CommunityStoreProvider";
import AboutLoader from "../Loaders/AboutLoader";
import Hr from "./CommentsPage/Aside/CommunityInfo/Items/Hr";
import CreatedAt from "./CommentsPage/Aside/CommunityInfo/Items/CreatedAt";
import Container from "./CommentsPage/Aside/CommunityInfo/Containers/Container";
import CreatePostLink from "./CommentsPage/Aside/CommunityInfo/Items/CreatePostLink";
import {nFormatter} from "../../utils/nFormatter";
const CommunityPageAbout = () => {
    const {community, isLoading} = useCommunityStore();
    if (isLoading) return <AboutLoader/>;
    if (!community) return null;
    return (
        <div css={container}>
            <h2 css={heading}>About Community</h2>
            <Container>
                <div>
                    <p css={p}>{community.about}</p>
                    <div>
                         <span css={theme => css`margin: 0; font-size: 12px; color: ${theme.color2}; font-weight: 700`}>
                                {nFormatter(community.subscribers)} Members
                         </span>
                    </div>
                </div>
                <Hr/>

                <CreatedAt createdAt={community.createdAt}/>
                <CreatePostLink/>
            </Container>
        </div>
    );
};
const container = theme => css`
  border-radius: 8px;
  background-color: ${theme.background1};
  label: community-info-container
`
const heading = theme => css`
  font-size: 14px;
  padding: 12px;
  margin: 0;
  color: ${theme.color2}
`
const p = css`margin: 0 0 8px 0`


export default CommunityPageAbout;
