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
  color: ${theme.settings.optionColor};
  margin-right: 8px;
  white-space: nowrap;
  font: inherit;
  text-decoration: inherit;
  font-size: 14px;
  font-weight: 700;
  display: inline-block;
  line-height: unset;
  padding: 15px 12px 12px;
  label: option-link
`

const linkActive = theme => css`
  color: ${theme.settings.selectedOptionColor};
  border-bottom: 3px solid ${theme.settings.selectedOptionBorder};
  &:hover, &:focus {
    color: ${theme.settings.optionHover}
  }
  label: --active
`

export default OptionLink;
