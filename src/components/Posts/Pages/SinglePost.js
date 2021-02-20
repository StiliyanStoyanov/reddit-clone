/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const SinglePost = () => {
    const theme = useTheme();

    return (
        <div css={container(theme)}>
            Single Post
        </div>
    );
};

const container = theme => css`

`

export default SinglePost;
