/** @jsxImportSource @emotion/react */
import {useCommunityStore} from "../../../../store/CommunityStore/CommunityStoreProvider";
import {useLocation} from "react-router";
import {genericLocationList, otherLocations} from "../genericLocationList";
import {
    location_community_image,
    location_container,
    location_text_span
} from "../../styles/searchable_styles/search_dropdown_button_styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LocationDisplay = () => {
    const {community} = useCommunityStore();
    const {pathname} = useLocation();
    const generic = !community && (otherLocations.find(location => pathname.startsWith(location.path)) || genericLocationList[0])

    return (
        <div css={location_container}>
            {community ?
                <>
                    <div css={location_community_image(community.imageUrl)}/>
                    <span css={[location_text_span]}>{community.id}</span>
                </>
                :
                <>
                    <FontAwesomeIcon icon={generic.icon}/>
                    <span css={[location_text_span]}>{generic.id}</span>
                </>
            }
        </div>
    );
};


export default LocationDisplay;
