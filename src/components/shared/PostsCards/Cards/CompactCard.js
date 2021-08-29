/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CardContainer from "../../../Posts/shared/Containers/CardContainer";
import ItemsContainer from "../../../Posts/shared/Containers/ItemsContainer";
import CompactViewIcon from "../../../Posts/shared/Items/CompactViewIcon";
import {faCommentAlt, faExpandAlt, faFileAlt, faLink} from "@fortawesome/free-solid-svg-icons";
import Image from "../../../Posts/shared/Items/Image";
import Title from "../../../Posts/shared/Items/Title";
import InfoContainer from "../../../Posts/shared/Containers/InfoContainer";
import CommunityLink from "../../../Posts/shared/Links/CommunityLink";
import DotSeparator from "../../../Posts/shared/Items/DotSeparator";
import PostedBy from "../../../Posts/shared/Links/PostedBy";
import {time_ago_media_query, time_ago_popup_one, TimeAgo, TimeAgoPopup} from "../../TimeAgo/TimeAgo";
import BottomContainer from "../../../Posts/shared/Containers/BottomContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    bottom_item_base,
    bottom_link,
    bottom_link_icon,
    bottom_link_span,
    link_overlay
} from "../../../../styles/card_styles";
import {scores_vertical_to_horizontal} from "../../../../styles/scores_styles";
import {Scores} from "../../../Posts/shared/Scores/Scores";
import {Link} from "react-router-dom";
import {useState} from "react";
import Content from "../../../Posts/shared/Items/Content/Content";

const CompactCard = ({post, to}) => {
    const {
        id, author, title, content, contentType, createdAt,
        scores, commentsCount, communityId, communityName, communityImageUrl
    } = post;
    const textContent = contentType === "post";
    const imageContent = contentType === "image";
    const linkContent = contentType === "link";
    const [expanded, setExpanded] = useState(false);
    const toggleExpand = () => setExpanded(prevExpanded => !prevExpanded);

    return (
        <>
            <CardContainer>
                <ItemsContainer css={[css`display:flex; align-items: center; height: inherit; padding: 4px 4px 4px 0;`]}>
                    {textContent && <CompactViewIcon icon={faFileAlt}/>}
                    {linkContent && <CompactViewIcon icon={faLink}/>}
                    {imageContent && <Image src={communityImageUrl}/>}
                    <div>
                        <Title postId={id} title={title}/>
                        <InfoContainer>
                            <CommunityLink name={communityName}/>
                            <DotSeparator/>
                            <PostedBy author={author}/>
                            <TimeAgo
                                css={[time_ago_media_query]}
                                timestamp={createdAt}
                            >
                                <TimeAgoPopup timestamp={createdAt} css={time_ago_popup_one}/>
                            </TimeAgo>
                        </InfoContainer>
                        <BottomContainer>
                            <button css={bottom_item_base} onClick={toggleExpand}>
                                <FontAwesomeIcon css={bottom_link_icon} icon={faExpandAlt}/>
                            </button>
                            <div css={[scores_vertical_to_horizontal]}>
                                <Scores initialScores={scores} communityId={communityName} postId={id}/>
                            </div>
                            <Link to={to} css={bottom_link}>
                                <FontAwesomeIcon css={bottom_link_icon} icon={faCommentAlt}/>
                                <span css={bottom_link_span}>
                                    {`${commentsCount} comments`}
                            </span>
                            </Link>
                            <Link css={[link_overlay]} to={to} tabIndex={-1}/>
                        </BottomContainer>
                    </div>
                </ItemsContainer>
                <div>
                    {expanded && <Content content={content} contentType={contentType}/>}
                </div>
            </CardContainer>

        </>
    );
};

export default CompactCard;
