/** @jsxImportSource @emotion/react */
import {timeDifference} from "../../../utils/timeDifference";
import {css} from "@emotion/react";
import {text_overflow_ellipsis} from "../../../styles/general_styles";

const TimeAgo = ({className, timestamp, children}) => {
    const date = timestamp?.toDate();
    const timeAgo = timeDifference(Date.now(), date)
    return (
        <span
            css={[time_ago_base]}
            className={className || null}
        >
            {timeAgo}
            {/*TimeAgoPopup Goes here*/}
            {children}
        </span>
    );
};
const TimeAgoPopup = ({timestamp, className}) => {
    return (
        <span className={className || null}>{timestamp?.toDate().toString()}</span>
    );
};
const time_ago_base = theme => css`
  font-size: 12px;
  z-index: 2;
  color: ${theme.color2};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    span {
      display: block;
    }
  }

  font-weight: 100;
  label: time-ago-span
`
const time_ago_media_query = css`
  position: relative;
  @media (max-width: 600px) {
    position: static;
  }
`
const time_ago_popup_base = css`
  position: absolute;
  font-size: 12px;
  z-index: 2;
  ${text_overflow_ellipsis};
  top: -18px;
  background-color: black;
  display: none
`

const time_ago_popup_one = css`
  ${time_ago_popup_base};
  @media (max-width: 600px) {
    top: -12px;
  }
  left: 50%;
  transform: translate(-50%, 0);
`
const time_ago_popup_two = css`
  ${time_ago_popup_base};
  left: 0;
  top: -8px
`

export {TimeAgo, TimeAgoPopup, time_ago_media_query, time_ago_popup_one, time_ago_popup_two};
