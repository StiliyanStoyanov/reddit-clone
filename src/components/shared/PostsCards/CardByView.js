/** @jsxImportSource @emotion/react */
import CompactCard from "./Cards/CompactCard";
import DefaultCard from "./Cards/DefaultCard";
import {memo} from "react";

const CardByView = memo(({post, view = "card"}) => {
    const {id, communityId} = post;
    const to = `/e/${communityId}/comments/${id}`;

    if (view === "compact") return <CompactCard post={post} to={to}/>
    return <DefaultCard post={post} to={to}/>
});

export default CardByView;
