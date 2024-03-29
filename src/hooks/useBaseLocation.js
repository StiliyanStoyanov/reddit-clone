/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react";
import {useMatch} from "react-router";

export const useBaseLocation = () => {
    const [{baseLocation, communityId}, setLocation] = useState({
        baseLocation: "",
        communityId: null,
    });
    const baseMatch = useMatch("/") || {path: null, params: {id: null}};
    console.log(baseMatch);
    const communityMatch = useMatch('/e/:id') || {path: null, params: {id: null}};
    useEffect(() => {
        if (baseMatch && baseMatch.path !== baseLocation) {
            setLocation({
                baseLocation: "/",
                communityId: null
            });
        } else if (communityMatch && communityMatch.params.id !== communityId) {
            setLocation({
                baseLocation: communityMatch.path,
                communityId: communityMatch.params.id
            });
        }
    }, [communityMatch, baseMatch]);
    return [baseLocation, communityId]
}