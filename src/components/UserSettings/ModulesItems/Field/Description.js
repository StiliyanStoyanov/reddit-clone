/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Description = ({children}) => {
    return (
        <p css={[container]}>
            {children}
        </p>
    );
};

const container = theme => css`
  margin: 0;
  font-weight: 400;
  color: ${theme.settings.metaText};
  font-size: 12px;
  line-height: 16px;
  label: description
`

export default Description;
