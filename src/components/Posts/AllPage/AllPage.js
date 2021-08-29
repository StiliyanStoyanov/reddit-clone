/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import ViewSelector from "../../shared/ViewSelector/ViewSelector";
import Posts from "./AllPosts";

const AllPage = () => {
    return (
        <main css={container}>
            <ViewSelector/>
            <Posts/>
        </main>
    );
};

const container = css`
  margin: 16px auto;
  max-width: 800px;
  flex-grow: 1;
`

export default AllPage;
