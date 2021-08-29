import {faHome, faRocket} from "@fortawesome/free-solid-svg-icons";

export const otherLocations = [
    {id: 'Top Communities', path: '/leaderboards', icon: faRocket}
]
export const genericLocationList = [
    {id: 'Home', path: '/', icon: faHome},
    ...otherLocations
]