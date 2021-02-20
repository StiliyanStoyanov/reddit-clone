/** @jsx jsx */
/* eslint-disable no-unused-vars */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {Scores} from "../shared/Scores/Scores";
import {faFileAlt} from "@fortawesome/free-solid-svg-icons/faFileAlt";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import Icon from "../shared/Items/Icon";
import Image from "../shared/Items/Image";
import Title from "../shared/Items/Title";
import PostContainer from "../shared/Containers/Post";
import ItemsContainer from "../shared/Containers/Items";
import InfoContainer from "../shared/Containers/Info"
import CommunityLink from "../shared/Links/Community";
import PostedBy from "../shared/Links/PostedBy";
import DotSeparator from "../shared/Items/DotSeparator";
import BottomContainer from "../shared/Containers/Bottom";
import BottomLink from "../shared/Links/BottomLink";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons/faCommentAlt";

const CompactView = ({posts}) => {
    const theme = useTheme();
    const postsList = posts.map(post => {
        const {id, author, title, communityName, communityImageUrl, upvotes, contentType} = post
        const textContent = contentType === "post";
        const imageContent = contentType === "image";
        const linkContent = contentType === "link";
        return (
            <PostContainer key={id} communityName={communityName} postId={id}>
                <Scores upvotes={upvotes} hideOnSmallSize={true}/>
                <ItemsContainer css={itemsContainer}>
                    {textContent && <Icon icon={faFileAlt} id={id}/>}
                    {linkContent && <Icon icon={faLink}/>}
                    {imageContent && <Image src={communityImageUrl}/>}
                    <div>
                        <Title postId={id}/>
                        <InfoContainer>
                            <CommunityLink name={communityName}/>
                            <DotSeparator/>
                            <PostedBy author={author}/>
                        </InfoContainer>
                        <BottomContainer>
                            <Scores upvotes={upvotes}/>
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
        <div css={container(theme)}>
            {postsList}
        </div>
    );
};

const container = theme => css`
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


