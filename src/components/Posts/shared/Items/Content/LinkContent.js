/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {Link} from "@reach/router";

//TODO: Replace placeholder values
const LinkContent = ({content}) => {
    const theme = useTheme();
    return (
        <Link to="PLACEHOLDER" css={linkStyle(theme)}>
            PLACEHOLDER
        </Link>
    );
};

const linkStyle = theme => css`

`

export default LinkContent;
