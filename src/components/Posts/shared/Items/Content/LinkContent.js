/** @jsxImportSource @emotion/react */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import {text_overflow_ellipsis} from "../../../../../styles/general_styles";
import {css} from "@emotion/react";
import {urlConstructor} from "../../../../../utils/urlValidators";

const LinkContent = ({content, className}) => {
    const url = urlConstructor(content);
    if (!url) return null;
    const pathname = url.pathname.replace(/\/$/, '');
    return (
        <a
            css={a}
            href={url.href}
            target="_blank"
            rel="noreferrer noopener"
            className={className || null}
        >
            <span css={span}>{url.hostname + pathname}</span>
            <FontAwesomeIcon css={[icon]} icon={faExternalLinkAlt}/>
        </a>
    );
};
const a = theme => css`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: inherit;
  z-index: 2;
  &:hover, &:focus-visible {
    text-decoration: underline;
  }
  color: ${theme.colorHighlight5};
  label: link
`
const span = css`
  max-width: 160px;
  ${text_overflow_ellipsis};
`
const icon = theme => css`
  font-size: inherit;
  z-index: 2;
  margin-left: 2px;
  color: ${theme.colorHighlight5};
`

export default LinkContent;
