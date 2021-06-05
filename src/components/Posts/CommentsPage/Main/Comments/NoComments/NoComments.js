/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments} from "@fortawesome/free-solid-svg-icons/faComments";

const NoComments = () => {
    return (
        <div css={[container]}>
            <div>
                <FontAwesomeIcon size="2x" icon={faComments}/>
            </div>
            <p css={[p1]}>No Comments Yet</p>
            <p css={[p2]}>Be the first one to leave a comment!</p>
        </div>
    );
};
const p1 = css`
  font-weight: 700;
`
const p2 = theme => css`
  margin: 0;
  color: ${theme.color2};
`
const container = theme => css`
  min-height: 380px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

export default NoComments;
