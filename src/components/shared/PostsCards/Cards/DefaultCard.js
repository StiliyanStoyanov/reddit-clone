/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CardContainer from "../../../Posts/shared/Containers/CardContainer";
import ItemsContainer from "../../../Posts/shared/Containers/ItemsContainer";
import InfoContainer from "../../../Posts/shared/Containers/InfoContainer";
import CommunityLink from "../../../Posts/shared/Links/CommunityLink";
import DotSeparator from "../../../Posts/shared/Items/DotSeparator";
import PostedBy from "../../../Posts/shared/Links/PostedBy";
import {time_ago_media_query, time_ago_popup_one, TimeAgo, TimeAgoPopup} from "../../TimeAgo/TimeAgo";
import Title from "../../../Posts/shared/Items/Title";
import Content from "../../../Posts/shared/Items/Content/Content";
import BottomContainer from "../../../Posts/shared/Containers/BottomContainer";
import {scores_vertical_to_horizontal} from "../../../../styles/scores_styles";
import {Scores} from "../../../Posts/shared/Scores/Scores";
import {Link} from "react-router-dom";
import {bottom_link, bottom_link_icon, bottom_link_span, link_overlay} from "../../../../styles/card_styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCommentAlt} from "@fortawesome/free-solid-svg-icons";

const DefaultCard = ({post, to}) => {
    const {
        id, author, title, content, contentType, createdAt,
        scores, commentsCount, communityId, communityName, communityImageUrl
    } = post;
    return (
        <CardContainer>
            <ItemsContainer>
                <InfoContainer css={css`margin: 0 0 8px; padding-top: 8px;`}>
                    <CommunityLink name={communityName} imageUrl={communityImageUrl}/>
                    <DotSeparator/>
                    <PostedBy author={author}/>
                    <TimeAgo
                        css={[time_ago_media_query]}
                        timestamp={createdAt}
                    >
                        <TimeAgoPopup timestamp={createdAt} css={time_ago_popup_one}/>
                    </TimeAgo>
                </InfoContainer>
                <Title postId={id} title={title}/>
                <Content content={content} contentType={contentType} postId={id}/>
                <BottomContainer>
                    <div css={[scores_vertical_to_horizontal]}>
                        <Scores initialScores={scores} communityId={communityId} postId={id}/>
                    </div>
                    <Link to={to} css={bottom_link}>
                        <FontAwesomeIcon css={bottom_link_icon} icon={faCommentAlt}/>
                        <span css={bottom_link_span}>
                            {`${commentsCount} comments`}
                        </span>
                    </Link>
                    <Link css={[link_overlay]} to={to} tabIndex={-1}/>
                </BottomContainer>
            </ItemsContainer>
        </CardContainer>
    );
};

export default DefaultCard;
