/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMeh} from "@fortawesome/free-solid-svg-icons";
import {item_base} from "../../../../styles/community_selector_styles";

const NoMatches = () => {
    return (
        <div css={[container]}>
            <p css={[p]}>No communities found</p>
            <FontAwesomeIcon icon={faMeh}/>
        </div>
    );
};
const container = css`${item_base};justify-content: center;`
const p = css`margin: 0 4px;`

export default NoMatches;
