/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons/faCaretDown";

const Toggle = ({activeSort, toggle}) => {
    return (
        <button css={button} onClick={toggle}>
            <div>{activeSort}</div>
            <FontAwesomeIcon css={caret} icon={faCaretDown}/>
        </button>
    );
};
const button = theme => css`
  font-family: inherit;
  display: flex;
  align-items: center;
  color: ${theme.colorDarkerBlue};
  font-size: 16px;
  background-color: transparent;
  label: sort-select-button
`;
const caret = css`
  margin: 0 4px;
  label: caret
`

export default Toggle;
