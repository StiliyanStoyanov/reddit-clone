/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import InfoContainer from "../../../../shared/Containers/Info";
import Community from "../../../../shared/Links/Community";
import DotSeparator from "../../../../shared/Items/DotSeparator";
import PostedBy from "../../../../shared/Links/PostedBy";

const Info = ({communityName, communityImageUrl, author}) => {
    return (
        <InfoContainer css={[infoContainer]}>
            <Community
                name={communityName}
                imageUrl={communityImageUrl}
            />
            <DotSeparator/>
            <PostedBy author={author}/>
        </InfoContainer>
    );
};

const infoContainer = css`
  padding: 0 8px;
  margin: 0 auto 2px;
  max-width: 600px;
  label: info-container
`

export default Info;
