/** @jsx jsx */
/** @jsxFrag React.Fragment */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const CommunityListItem = ({community, selectCommunity, currentlySelectedCommunity}) => {
    const theme = useTheme();
    // Reason for mousedown instead of click:
    // https://stackoverflow.com/questions/10652852/jquery-fire-click-before-blur-event
    // TLDR: click triggers on release, so blur will trigger before the click
    return (
        <div
            css={css`
              ${containerStyle}
              ${currentlySelectedCommunity === community.name ? {backgroundColor: theme.navIconsHoverBackground} : null}
            `}
            onMouseDown={selectCommunity(community)}
        >
            <img css={imageStyle} src={community.imageUrl} alt="NOT FOUND"/>
            <div css={innerContainerStyle}>
                <div css={nameStyle}>{community.name}</div>
                <div css={memberCountStyle}>{community.membersCount.toLocaleString()} members</div>
            </div>
        </div>
    )
}
export const containerStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
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

