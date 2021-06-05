/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-solid-svg-icons/faCalendarAlt";
import {dateFormatter} from "../../../../../../utils/dateFormatter";
import {memo} from "react";
import {flex_align_center} from "../../../../../../styles/general_styles";

const CreatedAt = memo(({createdAt}) => {
    const date = createdAt?.toDate();
    const {day, month, year} = dateFormatter(date);
    return (
        <div css={css`${flex_align_center}; margin-bottom: 8px;`}>
            <FontAwesomeIcon css={[icon]} icon={faCalendarAlt}/>
            <div>{`Created ${day} ${month}, ${year}`}</div>
        </div>
    );
});

const icon = css`
  font-size: 20px;
  margin-right: 8px;
  label: community-info-createdat
`

export default CreatedAt;
