/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Logo from "../Logo/Logo";
import React from "react";
import {useAuthModalStore} from "../../../store/AuthModalStoreProvider";

const Heading = () => {
    const {activeForm} = useAuthModalStore();
    const headingText = activeForm === "signup"
        ? "Create your account"
        : "Log in"
    return (
        <div css={[container]}>
            <Logo/>
            <h4 css={[heading]}>
                {headingText}
            </h4>
        </div>
    );
};
const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  white-space: nowrap;
  label: auth-modal-heading-container
`
const heading = css`
  font-size: 24px;
  margin: 0;
  label: auth-modal-heading
`

export default Heading;
