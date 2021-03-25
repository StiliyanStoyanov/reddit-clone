/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Heading from "./Items/Heading";
import Container from "./Containers/Container";
import CommunityLink from "./Items/CommunityLink";
import About from "./Items/About";
import Hr from "./Items/Hr";
import CreatedAt from "./Items/CreatedAt";
import CreatePostLink from "./Items/CreatePostLink";
import {useFetchDocument} from "../../../../../hooks/useFetchDocument";
import {useParams} from "react-router";
import AboutLoader from "../../../../Loaders/AboutLoader";

const CommunityInfo = () => {
    const {communityId} = useParams();
    const path = `communities/${communityId}`
    const {data, isLoading, isError, error} = useFetchDocument(path);
    if (isLoading) {
        return <AboutLoader/>
    }
    if (isError) {
        return (
            <div>
                <p>{error}</p>
            </div>
        )
    }
    return (
        <div css={[container]}>
            <Heading/>
            <Container>
                <CommunityLink name={data.name} imageUrl={data.imageUrl}/>
                <About about={data.about}/>
                <Hr/>
                <CreatedAt created={data.created}/>
                <CreatePostLink/>
            </Container>
        </div>
    );
};

const container = theme => css`
  border-radius: 8px;
  background-color: ${theme.singlePost.containerBackgroundColor};
  label: community-info-container
`

export default CommunityInfo;
