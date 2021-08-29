/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {nFormatter} from "../../../utils/nFormatter";

const CardSubscribers = ({subscribers}) => {
    return (
        <div>
            <div css={[div_subscribers]}>{nFormatter(subscribers, 1)}</div>
            <div css={[div_members]}>members</div>
        </div>
    );
};
const div_members = theme => css`
  color: ${theme.color2};
  font-size: 12px;
  line-height: 10px;
  label: subscribers-members
`
const div_subscribers = css`
  font-size: 18px;
  font-weight: 700;
  label: subscribers-count
`

export default CardSubscribers;
