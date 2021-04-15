import {useEffect} from "react";
import {auth} from "../../firebase";
import {userStoreActionTypes, useUserDispatch} from "../../store/UserStoreProvider";
const {sessionLogin, logout} = userStoreActionTypes

const UserListener = () => {
    const dispatch = useUserDispatch();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                console.log(user);
                dispatch({
                    type: sessionLogin,
                    payload: {user}
                });
            } else {
                dispatch({type: logout});
            }
        });
        return () => {
            unsubscribe();
        }
    }, [dispatch]);

    return null;
};

export default UserListener;
