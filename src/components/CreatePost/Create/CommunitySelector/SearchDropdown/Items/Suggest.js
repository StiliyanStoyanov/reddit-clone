/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {item_base} from "../../../../styles/community_selector_styles";

const Suggest = () => {
    return <p css={p}>Follow or search for a community</p>
};
const p = css`
  ${item_base};
  justify-content: center;
  margin: 0;
`;


export default Suggest;
