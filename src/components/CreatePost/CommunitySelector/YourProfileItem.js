/** @jsx jsx */
import {css, jsx} from "@emotion/core";

// TODO: Think of a way to implement the user profile in the community selector
const YourProfileItem = ({username, userInput}) => {
    if (username.startsWith(userInput)) {
        return (
            <div>
                <div css={yourProfileStyle}>Your Profile</div>
                <div css={profileItemsContainerStyle}>
                    <div css={imagePlaceholder}/>
                    <div css={usernameStyle}>u/{username}</div>
                </div>
            </div>
        );
    } else {
        return null
    }
}

/* STYLED COMPONENTS & STYLES USED IN THIS FILE BELOW */
const profileItemsContainerStyle = css({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    padding: "5px"
})
const yourProfileStyle = css({
    paddingLeft: "5px",
    userSelect: "none"
});
//TODO: Update when you get the actual image
const imagePlaceholder = css({
    width: '40px',
    height: '40px',
    backgroundColor: 'blue',
    borderRadius: '5px',
    border: 0
});
const usernameStyle = css({
    paddingLeft: '5px'
});


export default YourProfileItem