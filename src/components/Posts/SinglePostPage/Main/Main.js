/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import PostContent from "./PostContent/PostContent";
import Comments from "./Comments/Comments";

const Main = () => {
    return (
        <main css={[main]}>
            <PostContent/>
            <Comments/>
        </main>
    );
};

const main = theme =>  css`
  min-width: 380px;
  max-width: 650px;
  border-radius: 4px;
  background-color: ${theme.nav.backgroundColor};
  width: 100%;
  label: main-spv
`

export default Main;
