/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Icon = ({icon}) => {
    return (
        <div css={[iconContainer]}>
            <div css={[innerIconContainer]}>
                <FontAwesomeIcon css={[iconCss]} icon={icon}/>
            </div>
        </div>
    );
};

const iconContainer =  css`
  margin-right: 8px;
  label: icon-container
`
const innerIconContainer = css`
  height: 48px;
  width: 48px;
  fill: #24a0ed;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(36, 160,237, 0.2);
  label: inner-icon-container
`
const iconCss = css`
  font-size: 28px;
  color: #24a0ed;
  label: icon
`

export default Icon;
