/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {Link} from "@reach/router";

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
