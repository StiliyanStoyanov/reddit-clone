/** @jsx jsx */
import React from "react";
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useMatch} from "@reach/router";
import {useFetchSingle} from "../../../hooks/useFetchSingle";
import CardView from "../Views/CardView/CardView";
import CompactView from "../Views/CompactView/CompactView";

const SingleCommunity = ({view, sort}) => {
    const {communityId} = useMatch('/e/:communityId');
    const {data, fetchNext, communityExists, loading} = useFetchSingle(sort, communityId);
    const theme = useTheme();

    if (loading) return <div>Loading...</div>;
    if (!communityExists) return <div>Community does not exist</div>

    return (
        <div css={container(theme)}>
            <button onClick={fetchNext}>Get Next</button>
            {view === "card" && <CardView posts={data}/>}
            {view === "compact" && <CompactView posts={data}/>}
        </div>
    );
};

const container = theme => css`

`

export default SingleCommunity;
