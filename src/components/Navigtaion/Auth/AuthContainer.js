/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from "react";
import LoginLink from "./LoginLink";
import SignUpLink from "./SignUpLink";
import {useUserStore} from "../../../store/UserStoreProvider";

const AuthContainer = () => {
    const {user} = useUserStore();
    if (!user) {
        return (
            <div css={container}>
                <LoginLink/>
                <SignUpLink/>
            </div>
        )
    } else return null

}

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 5px;
  white-space: nowrap;
`

export default AuthContainer