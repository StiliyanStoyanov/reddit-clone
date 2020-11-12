import {useEffect} from "react";
import {useUserDispatch} from "../store/UserStoreProvider";

export function useTestingLogin() {
    const dispatch = useUserDispatch();
    useEffect(() => {
        const user = {displayName: 'abc', email: 'abc@a.aa', uid: '1'}
        const userData = { communitiesOwned: [], subscriptions: [], moderatorIn: [] }
        const userSubscriptionsCommunityData = { subscriptionsData: [] };
        setTimeout(() => {
            dispatch({
                type: "SESSION_LOGIN",
                payload: {
                    user,
                    userData,
                    userSubscriptionsCommunityData
                }
            });
        }, 100);
    }, [dispatch]);
}
