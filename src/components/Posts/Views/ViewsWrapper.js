import React from "react";
import CardView from "./CardView/CardView";
import CompactView from "./CompactView/CompactView";


const ViewsWrapper = React.memo(({view, data}) => {
    return (
        <>
            {view === "card" && <CardView posts={data}/>}
            {view === "compact" && <CompactView posts={data}/>}
        </>
    );
});
export default ViewsWrapper;
