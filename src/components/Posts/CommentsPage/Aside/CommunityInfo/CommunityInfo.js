/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Heading from "./Items/Heading";
import Container from "./Containers/Container";
import CommunityLink from "./Items/CommunityLink";
import About from "./Items/About";
import Hr from "./Items/Hr";
import CreatedAt from "./Items/CreatedAt";
import CreatePostLink from "./Items/CreatePostLink";
import AboutLoader from "../../../../Loaders/AboutLoader";
import {useCommunityStore} from "../../../../../store/CommunityStoreProvider";

const CommunityInfo = () => {
    const {community, isLoading} = useCommunityStore();
    if (isLoading) return <AboutLoader/>;
    if (!community) return null;
    return (
        <div css={[container]}>
            <Heading/>
            <Container>
                <CommunityLink name={community.name} imageUrl={community.imageUrl}/>
                <About about={community.about}/>
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

export default CommunityInfo;
