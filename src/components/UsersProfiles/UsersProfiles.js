/** @jsxImportSource @emotion/react */
import {memo} from 'react';
import {css} from "@emotion/react";
import {useCustomParams} from "../../hooks/useCustomRoutes";
import {useUserStore} from "../../store/UserStore/UserStoreProvider";
import {useFetchCollection} from "../../hooks/useFetchCollection/useFetchCollection";
import UserNotFound from "./UserNotFound";
import UserCard from "./UserCard";
import UserContent from "./UserContent/UserContent";
import {firestore} from "../../firebase";

const UsersProfiles = memo(() => {
    const {user} = useUserStore();
    const {username} = useCustomParams();

    const [{data: userData, isLoading}, dispatch] = useFetchCollection(
        firestore.collection('users'),
        1,
        {where: {key: "username", operator: "==", value: username}}
    );

    if (isLoading || !user) return null;
    if (userData.length === 0) return <UserNotFound/>;
    const userInDatabase = userData[0];
    const isAuthUser = userInDatabase && user && user.uid === userInDatabase.id;
    return (
        <div>
            <div css={container}>
                <div css={left_container}>
                    <UserContent
                        isAuthUser={isAuthUser}
                        user={userInDatabase}
                    />
                </div>
                <div css={right_container}>
                    <UserCard
                        isAuthUser={isAuthUser}
                        user={userInDatabase}
                    />
                </div>
            </div>
        </div>
    );
});
const container = css`
  margin: 16px auto;
  max-width: 1420px;
  display: flex;
`
const left_container = css`
  flex-grow: 1;
  margin-right: 8px;
`
const right_container = css`
  width: 380px;
  @media (max-width: 980px) {
    display: none;
  }
`

export default UsersProfiles;