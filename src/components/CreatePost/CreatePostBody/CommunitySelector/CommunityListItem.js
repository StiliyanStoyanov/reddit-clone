/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from "@emotion/core";

const CommunityListItem = ({community, selectCommunity, currentlySelectedCommunity}) => {
    // Reason for mousedown instead of click:
    // https://stackoverflow.com/questions/10652852/jquery-fire-click-before-blur-event
    // TLDR: click triggers on release, so blur will trigger before the click
    return (
        <div css={containerStyle} onMouseDown={selectCommunity(community)}>
            <img css={imageStyle} src={community.imageUrl} alt="NOT FOUND"/>
            <div css={innerContainerStyle}>
                <div css={nameStyle}>{community.name}</div>
                <div css={memberCountStyle}>{community.membersCount.toLocaleString()} members</div>
            </div>
            {currentlySelectedCommunity === community.name ? <div>YES</div> : null}
        </div>
    )
}
export const containerStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
`
export const innerContainerStyle = css`
  padding-left: 5px;
`
export const imageStyle = css`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%; 
`
export const nameStyle = css`
  font-size: 16px
`
export const memberCountStyle = css`
  font-size: 12px; color: darkgray
`

export default CommunityListItem

