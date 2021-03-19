/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CompactViewIcon = ({icon}) => {
    const theme = useTheme();
    return (
        <div css={container(theme.post)}>
            <FontAwesomeIcon css={iconStyle} icon={icon}/>
        </div>
    );
};

const container = theme => css`
  display: flex;
  width: 80px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.compactViewIconBackground};
`
const iconStyle = css`
  font-size: 20px;
  color: #818384;
  margin: auto;
`

export default CompactViewIcon;
