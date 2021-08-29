/** @jsxImportSource @emotion/react */
import {useForm} from "react-hook-form";
import {auth_form} from "./styles/auth-modal-styles";
import Input from "./Input";
import {auth} from "../../../firebase";
import {useAuthModalDispatch} from "../../../store/AuthModal/AuthModalProvider";
import {closeModal} from "../../../store/AuthModal/authModalActions";
import {useLocation, useNavigate} from "react-router";
import {rules} from "../../../utils/rules";
import FormButton from "./FormButton";
import {getFormError} from "./getFormError";

// https://www.chromium.org/developers/design-documents/form-styles-that-chromium-understands
// https://stackoverflow.com/questions/15738259/disabling-chrome-autofill
// https://stackoverflow.com/questions/2530/how-do-you-disable-browser-autocomplete-on-web-form-field-input-tags
// https://stackoverflow.com/questions/27988418/login-form-changed-username-to-email-autocomplete-keeps-entering-in-saved-emai
const LoginForm = () => {
    const [email, password] = ["email", "password"];
    const formMethods = useForm({
        defaultValues: {
            [email]: "",
            [password]: "",
        },
        mode: "onChange"
    });
    const navigate = useNavigate();
    const location = useLocation();
    const authModalDispatch = useAuthModalDispatch();
    const {register, setError, handleSubmit, formState} = formMethods
    const {isSubmitting, isValid, errors, dirtyFields} = formState

    const onSubmit = async (data) => {
        await auth.signInWithEmailAndPassword(data.email, data.password).then(() => {
            authModalDispatch(closeModal());
            navigate(location.pathname, {replace: true})
        }).catch(err => {
            const errorCode = err?.code
            const errorMessage = err?.message
            const {name, error} = getFormError(errorCode, errorMessage)
            setError(name, error, {shouldFocus: true})
        });
    }

    return (
        <form css={[auth_form]} onSubmit={handleSubmit(onSubmit)} noValidate={true}>
            <input {...register('username')} type={'hidden'} autoComplete="username"/>
            <Input
                register={register}
                rules={rules.email}
                error={errors.email || null}
                isDirty={dirtyFields.email || false}
                name={email}
                autoComplete="email"
                type={"email"}
                labelText={"Email"}
            />
            <Input
                register={register}
                rules={rules.password}
                error={errors.password|| null}
                isDirty={dirtyFields.password || false}
                name={password}
                autoComplete="current-password"
                type={'password'}
                labelText={"Password"}
            />

            <FormButton disabled={isSubmitting || !isValid} type={"submit"}>
                Log In
            </FormButton>
        </form>
    );
};

export default LoginForm;
