/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CompactViewIcon = ({icon}) => {
    return (
        <div css={container}>
            <FontAwesomeIcon css={iconStyle} icon={icon}/>
        </div>
    );
};

const container = theme => css`
  display: flex;
  width: 80px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.colorHighlight4}
`

// Dark: compactViewIconBackground: '#202021'
// Light:  compactViewIconBackground: 'rgba(28, 28, 28, 0.03)'
const iconStyle = css`
  font-size: 20px;
  color: #818384;
  margin: auto;
`

export default CompactViewIcon;
