/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const Description = ({children}) => {
    const theme = useTheme();
    return (
        <p css={container(theme)}>
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
`

export default Description;
