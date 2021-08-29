/** @jsxImportSource @emotion/react */
import {useForm} from "react-hook-form";
import Input from "./Input";
import {getFormError} from "./getFormError";
import {auth, firestore, functions} from "../../../firebase";
import {auth_form} from "./styles/auth-modal-styles";
import React, {useState} from "react";
import {useAuthModalDispatch} from "../../../store/AuthModal/AuthModalProvider";
import {closeModal} from "../../../store/AuthModal/authModalActions";
import {toast} from "react-toastify";
import {useLocation, useNavigate} from "react-router";
import {rules} from "../../../utils/rules";
import {Spinner} from "../../Loaders/Spinner";
import FormButton from "./FormButton";
// https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
// https://stackoverflow.com/questions/15738259/disabling-chrome-autofill
// https://stackoverflow.com/questions/2530/how-do-you-disable-browser-autocomplete-on-web-form-field-input-tags
// https://stackoverflow.com/questions/27988418/login-form-changed-username-to-email-autocomplete-keeps-entering-in-saved-emai
const SignupForm = () => {
    const authModalDispatch = useAuthModalDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [username, email, password, confirmPassword] = ["username", "email", "password", "confirmPassword"]
    const [currentPassword, newEmail] = ["currentPassword", "newEmail"];
    const formMethods = useForm({
        defaultValues: {
            [currentPassword]: "",
            [newEmail]: "",
        },
        mode: "onChange"
    });
    const {register, setError, handleSubmit, watch, formState} = formMethods
    const {isSubmitting, isValid, errors, dirtyFields} = formState
    const [confirmPasswordRules] = useState(() => ({
        ...rules.password,
        validate: (value) => {
            if (value === watch(password)) {
                return true
            }
            return "Passwords do not match"
        }
    }))
    const onSubmit = async (data) => {
        const {username, password, email} = data;
        const user = await firestore.doc(`users/${username}`).get();
        if (user.exists) {
            return setError("username",{
                type: 'auth/username-already-exists',
                message: 'The username is already taken'
            }, {shouldFocus: true})
        }
        const createUser =  functions.httpsCallable('createUser');
        await createUser(data).then(async user => {
            await auth.signInWithEmailAndPassword(email, password);
            navigate(location.pathname, {replace: true})
            authModalDispatch(closeModal());
            // TODO: Update
            await auth.currentUser.sendEmailVerification({url: "http://localhost:3000"})
        }).catch(err => {
            const errorCode = err?.details?.code
            const errorMessage = err?.details?.message
            const {name, error} = getFormError(errorCode, errorMessage);
            if (name === "internal") {
                return toast.error('Server error please try again later');
            }
            setError(name, error)
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} css={[auth_form]} noValidate={true}>
            <Input
                register={register}
                rules={rules.username}
                error={errors.username || null}
                isDirty={dirtyFields.username || false}
                name={username}
                autoComplete={"username"}
                type={"text"}
                labelText={"Username"}
            />
            <Input
                register={register}
                rules={rules.email}
                error={errors.email || null}
                isDirty={dirtyFields.email || false}
                name={email}
                autoComplete={"email"}
                type={"email"}
                labelText={"Email"}
            />
            <Input
                register={register}
                rules={rules.password}
                error={errors.password || null}
                isDirty={dirtyFields.password || false}
                name={password}
                autoComplete={"new-password"}
                type={"password"}
                labelText={"Password"}
            />

            <Input
                register={register}
                rules={confirmPasswordRules}
                error={errors.confirmPassword || null}
                isDirty={dirtyFields.confirmPassword || false}
                name={confirmPassword}
                autoComplete={"new-password"}
                type={"password"}
                labelText={"Confirm Password"}
            />
            {isSubmitting && <Spinner/>}
            <FormButton disabled={isSubmitting || !isValid} type={"submit"}>
                Sign Up
            </FormButton>
        </form>
    );
};

export default SignupForm;
