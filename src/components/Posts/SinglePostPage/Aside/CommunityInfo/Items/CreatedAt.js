/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import ItemContainer from "../Containers/ItemContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt} from "@fortawesome/free-regular-svg-icons/faCalendarAlt";

const CreatedAt = ({created}) => {
    let date = created.toDate();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    const month = months[date.getUTCMonth()];
    const day = ('0' + date.getUTCDate()).slice(-2);
    const year = date.getUTCFullYear();
    return (
        <ItemContainer>
            <FontAwesomeIcon css={[icon]} icon={faCalendarAlt}/>
            <div>Created {day} {month}, {year}</div>
        </ItemContainer>
    );
};

const icon = css`
  font-size: 20px;
  margin-right: 8px;
  label: community-info-created-icon
`

export default CreatedAt;
