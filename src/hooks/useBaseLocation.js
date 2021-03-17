/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {useMatch} from "@reach/router";

export const useBaseLocation = () => {
    const [{baseLocation, communityId}, setLocation] = useState({
        baseLocation: "",
        communityId: null,
    });
    const baseMatch = useMatch("/");
    const communityMatch = useMatch('/e/:id');
    useEffect(() => {
        if (baseMatch && baseMatch.path !== baseLocation) {
            setLocation({
                baseLocation: "/",
                communityId: null
            });
        } else if (communityMatch && communityMatch.id !== communityId) {
            setLocation({
                baseLocation: communityMatch.path,
                communityId: communityMatch.id
            });
        }
    }, [communityMatch, baseMatch]);
    return [baseLocation, communityId]
}