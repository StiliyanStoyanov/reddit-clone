/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Scores} from "../../shared/Scores/Scores";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import CompactViewIcon from "../../shared/Items/CompactViewIcon";
import Image from "../../shared/Items/Image";
import Title from "../../shared/Items/Title";
import PostContainer from "../../shared/Containers/PostCardContainer";
import ItemsContainer from "../../shared/Containers/Items";
import InfoContainer from "../../shared/Containers/Info"
import CommunityLink from "../../shared/Links/Community";
import PostedBy from "../../shared/Links/PostedBy";
import DotSeparator from "../../shared/Items/DotSeparator";
import BottomContainer from "../../shared/Containers/Bottom";
import BottomLink from "../../shared/Links/BottomLink";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";

const CompactView = ({posts}) => {
    const postsList = posts.map(post => {
        const {id, author, title, contentType, communityName, communityImageUrl, upvotes} = post
        const textContent = contentType === "post";
        const imageContent = contentType === "image";
        const linkContent = contentType === "link";
        const to = `/e/${communityName}/comments/${id}`;
        return (
            <PostContainer key={id} to={to} post={post}>
                <Scores upvotes={upvotes} hideOnSmallSize={true}/>
                <ItemsContainer css={itemsContainer}>
                    {textContent && <CompactViewIcon icon={faFileAlt} id={id}/>}
                    {linkContent && <CompactViewIcon icon={faLink}/>}
                    {imageContent && <Image src={communityImageUrl}/>}
                    <div>
                        <Title postId={id} title={title}/>
                        <InfoContainer>
                            <CommunityLink name={communityName}/>
                            <DotSeparator/>
                            <PostedBy author={author}/>
                        </InfoContainer>
                        <BottomContainer>
                            <Scores upvotes={upvotes} hideOnBigSize={true}/>
                            <BottomLink icon={faCommentAlt} to={`e/${communityName}/comments/${id}`}>
                                500 comments
                            </BottomLink>
                        </BottomContainer>
                    </div>
                </ItemsContainer>
            </PostContainer>
        )
    })

    return (
        <div css={container}>
            {postsList}
        </div>
    );
};

const container =  css`
  width: 100%;
`
const itemsContainer = css`
  display: flex;
  height: inherit;
  padding-top: 4px;
  padding-left: 4px;
  padding-right: 4px;
`

export default CompactView


