/** @jsxImportSource @emotion/react */
import CardByView from "./CardByView";

const CardsList = ({data, view}) => {
    return data.map(post => <CardByView key={post.id} post={post} view={view}/>)
};

export default CardsList;
