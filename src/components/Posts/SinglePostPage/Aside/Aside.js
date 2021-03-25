/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CommunityInfo from "./CommunityInfo/CommunityInfo";

const Aside = () => {
    return (
        <aside css={[aside]}>
            <CommunityInfo/>
        </aside>
    );
};

const aside = css`
  width: 300px;
  margin: 0 10px;
  height: 100%;
  @media (max-width: 960px) {
    display: none;
  }
  label: aside-spv
`

export default Aside;
