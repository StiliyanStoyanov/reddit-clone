/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const Items = ({children, ...props}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)} {...props}>
            {children}
        </div>
    );
};

const container = theme => css`
  width: 100%;
`

export default Items;
