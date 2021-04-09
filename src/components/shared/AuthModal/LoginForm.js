/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {auth_form, auth_form_submit_button} from "./styles/auth-modal-styles";
import {validateEmail} from "../../../utils/validateEmail";
import Input from "./Input";
import {auth} from "../../../firebase";
import {useAuthModalDispatch, authModalActions} from "../../../store/AuthModalStoreProvider";
const {closeModal} = authModalActions

const LoginForm = () => {
    const [email, password] = ["email", "password"];
    const formMethods = useForm({
        defaultValues: {
            [email]: "",
            [password]: "",
        },
    });
    const authModalDispatch = useAuthModalDispatch();
    const {register, setError, handleSubmit, formState} = formMethods
    const {isSubmitting, errors, dirtyFields} = formState
    const [rules] = useState(() => {
        return {
            email: {
                required: {value: true, message: "Field is required"},
                validate: validateEmail,
            },
            password: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters"},
                maxLength: {value: 254, message: "Password cannot exceed 254 characters"}
            }
        }
    })
    const onSubmit = async (data) => {
        auth.signInWithEmailAndPassword(data.email, data.password).then(() => {
            authModalDispatch({type: closeModal});
        }).catch(error => {
            if (error.code) {
                if (error.code?.includes("user")) {
                    setError("email", {
                        type: error.code,
                        message: "There is no user corresponding to this email"
                    }, {shouldFocus: true});
                } else if (error.code?.includes("password")) {
                    setError("password", {
                        type: error.code,
                        message: "The password is invalid"
                    }, {shouldFocus: true});
                } else if (error.code?.includes("email")) {
                    setError("email", {
                        type: error.code,
                        message: error.message
                    }, {shouldFocus: true});
                } else {
                    // TODO: Add notification something went wrong
                }
            }
        });
    }

    return (
        <form css={[auth_form]} onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <Input
                register={register}
                rules={rules.email}
                error={errors.email || null}
                isDirty={dirtyFields.email || false}
                name={email}
                type={"email"}
                labelText={"Email"}
            />

            <Input
                register={register}
                rules={rules.password}
                error={errors.password|| null}
                isDirty={dirtyFields.password || false}
                name={password}
                type={'password'}
                labelText={"Password"}
            />

            <button
                disabled={isSubmitting}
                css={auth_form_submit_button}
            >
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
