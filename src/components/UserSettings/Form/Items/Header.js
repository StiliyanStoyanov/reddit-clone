/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({headerIcon, headerText}) => {
    const theme = useTheme();
    return (
        <div css={container}>
            <div css={iconContainer}>
                <div css={innerIconContainer}>
                    <FontAwesomeIcon css={icon} icon={headerIcon}/>
                </div>
            </div>
            <h2 css={header(theme)}>{headerText}</h2>
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
`

const iconContainer =  css`
  margin-right: 8px;
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
`
const header = theme => css`
  font-size: 22px;
  color: ${theme.settings.color};
  font-weight: 700;
  margin: 0;
  padding: 0;
  border: 0;

`
const icon = css`
  font-size: 28px;
  color: #24a0ed;
`

export default Header;
