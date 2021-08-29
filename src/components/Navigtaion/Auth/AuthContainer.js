/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import LoginModalButton from "./LoginModalButton";
import SignUpModalButton from "./SignUpModalButton";
import {useUserStore} from "../../../store/UserStore/UserStoreProvider";

const AuthContainer = () => {
    const {user, isLoading} = useUserStore();
    if (isLoading || user) return null;
    return (
        <div css={[container]}>
            <LoginModalButton/>
            <SignUpModalButton/>
        </div>
    );

}

const container = css`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 5px;
  white-space: nowrap;
  label: auth-buttons-container
`

export default AuthContainer