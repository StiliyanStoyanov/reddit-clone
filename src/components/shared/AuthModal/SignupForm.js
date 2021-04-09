/** @jsxImportSource @emotion/react */
import {useForm} from "react-hook-form";
import Input from "./Input";
import {auth, functions} from "../../../firebase";
import {auth_form, auth_form_submit_button} from "./styles/auth-modal-styles";
import React, {useState} from "react";
import {validateEmail} from "../../../utils/validateEmail";
import {validateUsername} from "../../../utils/validateUsername";
import {useAuthModalDispatch, authModalActions} from "../../../store/AuthModalStoreProvider";
const {closeModal} = authModalActions

const SignupForm = () => {
    const authModalDispatch = useAuthModalDispatch();
    const [username, email, password, confirmPassword] = ["username", "email", "password", "confirmPassword"]
    const [currentPassword, newEmail] = ["currentPassword", "newEmail"];
    const formMethods = useForm({
        defaultValues: {
            [currentPassword]: "",
            [newEmail]: "",
        },
    });
    const {register, setError, handleSubmit, watch, formState} = formMethods
    const {isSubmitting, errors, dirtyFields} = formState
    const [rules] = useState(() => {
        return {
            username: {
                required: {value: true, message: "Field is required"},
                validate: validateUsername,
            },
            email: {
                required: {value: true, message: "Field is required"},
                validate: validateEmail,
            },
            password: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 1, message: "Password must be at least 6 characters"},
                maxLength: {value: 254, message: "Password cannot exceed 254 characters"}
            },
            confirmPassword: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 1, message: "Password must be at least 6 characters long"},
                validate: (value) => {
                    if (value === watch(password)) {
                        return true
                    }
                    return "Passwords do not match"
                }
            }
        }
    })

    const onSubmit = async ({username, password, email}) => {
        const createUser = functions.httpsCallable("createUser");
        const { data } = await createUser({username, password, email}).catch(err => console.log(err));
        if (data.error) {
            if (data.error?.code?.includes("username")) {
                return setError("username", {
                    type: data.error.code,
                    message: data.error.message
                }, {shouldFocus: true});
            } else if (data.error?.code?.includes("password")) {
                return setError("username", {
                    type: data.error.code,
                    message: data.error.message
                }, { shouldFocus: true});
            } else if (data.error?.code?.includes("email")) {
                return setError("email", {
                    type: data.error.code,
                    message: data.error.message
                }, { shouldFocus: true});
            }
            // TODO: Add notification something went wrong
            return null;
        }

        await auth.signInWithEmailAndPassword(email, password).catch(err => console.error(err));
        if (auth.currentUser) {
            auth.currentUser.sendEmailVerification({
                url: "http://localhost:3000"
            }).catch(err => console.error(err));
        }
        authModalDispatch({type: closeModal})
        // TODO: Add notification sign up successful
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={[auth_form]} noValidate={true}>
            <Input
                register={register}
                rules={rules.username}
                error={errors.username || null}
                isDirty={dirtyFields.username || false}
                name={username}
                type={"text"}
                labelText={"Username"}
            />
            <Input
                register={register}
                rules={rules.password}
                error={errors.password || null}
                isDirty={dirtyFields.password || false}
                name={password}
                type={"password"}
                labelText={"Password"}
            />

            <Input
                register={register}
                rules={rules.confirmPassword}
                error={errors.confirmPassword || null}
                isDirty={dirtyFields.confirmPassword || false}
                name={confirmPassword}
                type={"password"}
                labelText={"Confirm Password"}
            />


            <Input
                register={register}
                rules={rules.email}
                error={errors.email || null}
                isDirty={dirtyFields.email || false}
                name={email}
                type={"email"}
                labelText={"Email"}
            />


            <button
                disabled={isSubmitting}
                css={[auth_form_submit_button]}
                type="submit"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignupForm;
