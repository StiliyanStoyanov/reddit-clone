/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Scores} from "../../shared/Scores/Scores";
import PostContainer from "../../shared/Containers/PostCardContainer";
import ItemsContainer from "../../shared/Containers/Items";
import Title from "../../shared/Items/Title";
import InfoContainer from "../../shared/Containers/Info";
import CommunityLink from "../../shared/Links/Community";
import DotSeparator from "../../shared/Items/DotSeparator";
import PostedBy from "../../shared/Links/PostedBy";
import Content from "../../shared/Items/Content/Content";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";
import BottomLink from "../../shared/Links/BottomLink";
import BottomContainer from "../../shared/Containers/Bottom";
import React from "react";

const CardView = ({posts}) => {
    const postsList = posts.map(post => {
        const {id, author, title, content, contentType, communityName, communityImageUrl, upvotes} = post
        const to = `/e/${communityName}/comments/${id}`;
        return (
            <PostContainer key={id} to={to} post={post}>
                <ItemsContainer>
                    <Scores upvotes={upvotes} hideOnSmallSize={true}/>
                    <InfoContainer css={css`margin: 8px 0`}>
                        <CommunityLink name={communityName} imageUrl={communityImageUrl}/>
                        <DotSeparator/>
                        <PostedBy author={author}/>
                    </InfoContainer>
                    <Title postId={id} title={title}/>
                    <Content content={content} contentType={contentType} postId={id}/>
                    <BottomContainer>
                        <Scores upvotes={upvotes} hideOnBigSize={true}/>
                        <BottomLink icon={faCommentAlt} to={to}>
                            500 comments
                        </BottomLink>
                    </BottomContainer>
                </ItemsContainer>
            </PostContainer>
        );
    })

    return (
        <div id="card-view">
            {postsList}
        </div>
    );
};

export default CardView


