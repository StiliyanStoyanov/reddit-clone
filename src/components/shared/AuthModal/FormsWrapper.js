/** @jsxImportSource @emotion/react */
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import {useAuthModalStore} from "../../../store/AuthModal/AuthModalProvider";
import React from "react";

const FormsWrapper = () => {
    const {activeForm} = useAuthModalStore();
    return (
        <div>
            {activeForm === "login"
                ? <LoginForm/>
                : <SignupForm/>
            }
        </div>
    );
};

export default FormsWrapper;
