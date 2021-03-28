/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";

const LinkContent = ({content}) => {
    const theme = useTheme();
    const url = new URL(content);
    const handleClick = event => {
        event.preventDefault();
        console.log(url);
        window.open(url.href, '_blank')
    }
    return (
        <div css={container}>
            <a onClick={handleClick} css={a(theme.singlePost)} href={content}>
                {url.hostname}
                <FontAwesomeIcon css={[icon]} icon={faExternalLinkAlt}/>
            </a>
        </div>
    );
};

const container = css`
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 0 8px;
  max-height: 600px;
  max-width: 600px;
  label: link-container-spv
`
const a = theme => css`
  font-size: 12px;
  color: ${theme.anchorColor};
  &:hover, &:focus-visible {
    text-decoration: underline;
  }
  label: link-content-spv
`
const icon = css`
  margin-left: 5px;
  label: link-icon-spv
`

export default LinkContent;
