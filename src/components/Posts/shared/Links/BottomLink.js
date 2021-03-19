/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {Link} from "@reach/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BottomLink = ({icon, children, to}) => {
    const theme = useTheme();

    return (
        <Link to={to} css={linkContainer(theme.post)}>
            <FontAwesomeIcon css={iconStyle} icon={icon}/>
            <span css={spanStyle}>
                {children}
            </span>
        </Link>
    );
};

const linkContainer = theme => css`
  display: flex;
  position: relative;
  z-index: 2;
  align-items: center;
  white-space: nowrap;
  word-break: normal;
  color: #818384;
  margin-right: 4px;
  font-size: 12px;
  font-weight: 700;
  padding: 4px;
  border-radius: 4px;
  box-sizing: border-box;
  vertical-align: baseline;
  &:hover, &:focus-visible {
    outline: 0;
    background-color: ${theme.bottomHoverContainerBackground};
  }
`

const iconStyle = css`
  display: inline-block;
  width: 16px;
  height: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  vertical-align: text-bottom;
`

const spanStyle = css`
  padding-bottom: 3px;
  padding-left: 2px;
`

export default BottomLink;
