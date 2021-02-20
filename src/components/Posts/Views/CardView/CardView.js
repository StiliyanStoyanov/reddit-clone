/** @jsx jsx */
/* eslint-disable no-unused-vars */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {Scores} from "../shared/Scores/Scores";
import PostContainer from "../shared/Containers/Post";
import ItemsContainer from "../shared/Containers/Items";
import Title from "../shared/Items/Title";
import InfoContainer from "../shared/Containers/Info";
import CommunityLink from "../shared/Links/Community";
import DotSeparator from "../shared/Items/DotSeparator";
import PostedBy from "../shared/Links/PostedBy";
import Content from "../shared/Items/Content";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import BottomLink from "../shared/Links/BottomLink";
import BottomContainer from "../shared/Containers/Bottom";

const CardView = ({posts}) => {
    const theme = useTheme();
    const postsList = posts.map(post => {
        const {id, author, title, content, contentType, communityName, communityImageUrl, upvotes} = post
        return (
            <PostContainer key={id} communityName={communityName} postId={id}>
                <ItemsContainer>
                    <Scores upvotes={upvotes} hideOnSmallSize={true}/>
                    <InfoContainer css={css`margin: 8px 0`}>
                        <CommunityLink name={communityName} imageUrl={communityImageUrl}/>
                        <DotSeparator/>
                        <PostedBy author={author}/>
                    </InfoContainer>
                    <Title postId={id} title={title}/>
                    <Content content={content} contentType={contentType}/>
                    <BottomContainer>
                        <Scores upvotes={upvotes}/>
                        <BottomLink icon={faCommentAlt} to={`e/${communityName}/comments/${id}`}>
                            500 comments
                        </BottomLink>
                    </BottomContainer>
                </ItemsContainer>
            </PostContainer>
        );
    })

    return (
        <div css={container(theme)}>
            {postsList}
        </div>
    );
};

const container = theme => css``

export default CardView


