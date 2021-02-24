/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {Link} from "@reach/router";

const Post = ({communityName, postId, children}) => {
    const theme = useTheme();
    return (
        <div css={container(theme.post)}>
            {children}
            <Link css={linkStyle} to={`e/${communityName}/comments/${postId}`} tabIndex={-1}/>
        </div>
    );
};
const container = theme => css`
  position: relative;
  z-index: 1;
  margin: 10px auto;
  padding-left: 40px;
  border: 1px solid ${theme.borderColor};
  background-color: ${theme.backgroundColor};
  border-radius: 4px;
  min-width: 380px;
  max-width: 700px;
  max-height: 500px;
  width: 100%;
  cursor: pointer;
  &:hover, &:active {
    border: 1px solid ${theme.borderHover};
  }
  @media (max-width: 420px) {
    padding-left: 0;
  }
`
const linkStyle = css`
  width: 100%;
  height: 100%; 
  position: absolute;
  top: 0;
  left: 0;
`

export default Post;
