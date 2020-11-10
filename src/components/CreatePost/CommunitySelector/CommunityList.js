import React from "react";
import CommunityListItem from "./CommunityListItem";

const CommunityList = ({type, communityList, selectCommunity, currentlySelectedCommunity}) => {
    const communitiesList = communityList.map(community => {
        return <CommunityListItem key={community.name} community={community} selectCommunity={selectCommunity} currentlySelectedCommunity={currentlySelectedCommunity}/>
    });
    if (communityList.length === 0) {
        return null;
    }
    return (
        <div>
            <div>{type}</div>
            {communitiesList}
        </div>
    );
}

export default CommunityList