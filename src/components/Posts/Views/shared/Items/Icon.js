/** @jsx jsx */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Icon = ({icon}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <FontAwesomeIcon css={iconStyle} icon={icon}/>
        </div>
    );
};

const container = theme => css`
  display: flex;
  width: 80px;
  height: 60px;
  border-radius: 4px;
  background-color: #202021;
`
const iconStyle = css`
  font-size: 20px;
  color: #818384;
  margin: auto;
`

export default Icon;
