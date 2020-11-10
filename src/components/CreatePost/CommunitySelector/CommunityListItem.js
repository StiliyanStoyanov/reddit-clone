/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const CommunityListItem = ({community, selectCommunity, currentlySelectedCommunity}) => {
    const theme = useTheme();
    return (
        <div
            css={css`
              ${containerStyle}
              ${currentlySelectedCommunity === community.name ? {backgroundColor: theme.createPost.hoverOverlay} : null}
            `}
            onMouseDown={selectCommunity(community)}
        >
            <img css={imageStyle} src={community.imageUrl} alt="NOT FOUND"/>
            <div css={innerContainerStyle}>
                <div css={nameStyle}>{community.name}</div>
                <div css={memberCountStyle}>{community.subscribers.toLocaleString()} members</div>
            </div>
        </div>
    )
}
const containerStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
`
const innerContainerStyle = css`
  padding-left: 5px;
`
const imageStyle = css`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%; 
`
const nameStyle = css`
  font-size: 16px
`
const memberCountStyle = css`
  font-size: 12px;
  color: darkgray
`

export default CommunityListItem

