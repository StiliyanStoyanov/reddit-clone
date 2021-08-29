/** @jsxImportSource @emotion/react */
import CommunityBar from "./CommunityBar";

const CommunityBarIntermediate = ({community, isLoading}) => {
    if (!community || isLoading) return null;
    return <CommunityBar community={community}/>
};
export default CommunityBarIntermediate;

