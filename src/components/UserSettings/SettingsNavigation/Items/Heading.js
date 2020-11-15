/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";

const Heading = () => {
    return (
        <h3 css={heading}>
            <FontAwesomeIcon css={icon} icon={faCog}/>
            User Settings
        </h3>
    );
};

const heading = css`
  display: flex;
  margin-top: 0;
  font-size: 18px;
  align-items: center;
`
const icon = css`
  font-size: 20px;
  margin-right: 8px
`

export default Heading;
