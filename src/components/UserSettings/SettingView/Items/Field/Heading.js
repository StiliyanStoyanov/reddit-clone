/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const Heading = ({children}) => {
    const theme = useTheme();
    return (
        <div css={css`display: flex; flex-direction: row; align-items: center`}>
            <h3 css={container(theme)}>
                {children}
            </h3>
        </div>
    );
};

const container = theme => css`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.settings.color};
  display: flex;
  margin: 0 0 4px;
`;

export default Heading;
