/** @jsx jsx */
/* eslint-disable no-unused-vars */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import CardView from "../Views/CardView/CardView";
import {useFetchAll} from "../../../hooks/useFetchAll";
import CompactView from "../Views/CompactView/CompactView";

const AllCommunities = ({view, sort}) => {
    const theme = useTheme();
    const {data, fetchNext} = useFetchAll(sort);
    return (
        <div css={container(theme)}>
            <button onClick={fetchNext}>Get Next</button>
            {view === "card" && <CardView posts={data}/>}
            {view === "compact" && <CompactView posts={data}/>}
        </div>
    );
};

const container = theme => css``

export default AllCommunities;
