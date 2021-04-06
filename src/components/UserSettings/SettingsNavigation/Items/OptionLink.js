/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

const OptionLink = ({to, children}) => {
    let {['*']: paramOption} = useParams();
    const isSelected = paramOption === to;

    return (
        <Link css={[link, isSelected && linkActive]} to={to}>
            {children}
        </Link>
    );
};

const link = theme => css`
  cursor: pointer;
  color: ${theme.color2};
  margin-right: 8px;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  &:hover, &:focus-visible {
    color: ${theme.colorHighlight1};
  }
  padding: 15px 12px 12px;
  label: option-link
`

const linkActive = theme => css`
  color: ${theme.colorHighlight1};
  border-bottom: 3px solid ${theme.colorHighlight2};
  label: active
`

export default OptionLink;
