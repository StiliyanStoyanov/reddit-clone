/** @jsx jsx */
/* eslint-disable no-unused-vars */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useMatch} from "@reach/router";

const SingleCommunity = ({view, sort}) => {
    const {communityId} = useMatch('/e/:communityId');
    const theme = useTheme();

    return (
        <div css={container(theme)}>
            Single Community
        </div>
    );
};

const container = theme => css`

`

export default SingleCommunity;
