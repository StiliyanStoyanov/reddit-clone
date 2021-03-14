/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

// TODO: Think of a way to implement the user profile in the community selector
const YourProfileItem = ({username, userInput, currentlySelectedCommunity, selectCommunity}) => {
    const theme = useTheme();
    if (username.startsWith(userInput)) {
        return (
            <div>
                <div css={[yourProfileStyle]}>Your Profile</div>
                <div css={[profileItemsContainerStyle, currentlySelectedCommunity === username ? {backgroundColor: theme.createPost.hoverOverlay} : null]}>
                    <div css={imagePlaceholder}/>
                    <div css={usernameStyle}>u/{username}</div>
                </div>
            </div>
        );
    } else {
        return null
    }
}

const profileItemsContainerStyle = css`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  width: 100%;
`
const yourProfileStyle = css`
  padding-left: 5px;
  user-select: none;
`
//TODO: Update when you get the actual image
const imagePlaceholder = css`
  width: 40px;
  height: 40px;
  background-color: blue;
  border-radius: 5px;
  border: 0;
`
const usernameStyle = css`
  padding-left: 5px;
`


export default YourProfileItem