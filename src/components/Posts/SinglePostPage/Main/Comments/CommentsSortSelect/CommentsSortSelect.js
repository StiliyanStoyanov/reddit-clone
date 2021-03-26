/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";

const CommentsSortSelect = () => {

    return (
        <div css={[container]}>
            <span>Sort By</span>
            <button css={[button]}>Type</button>
            <FontAwesomeIcon css={caret} icon={faCaretDown}/>
        </div>
    );
};

const container = css`
  label: sort-select
`
const button = css`
  margin: 0 8px;
  label: sort-select-button
`
const caret = css`
  label: caret
`
export default CommentsSortSelect;
