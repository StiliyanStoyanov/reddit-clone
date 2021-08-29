import Header from "../../../../Form/Items/Header";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Description from "../../../../Form/Items/Description";
import InputsContainer from "../../../../Form/Items/InputsContainer";
import Input from "../../../../Form/Items/Input/Input";
import Button from "../../../../Form/Items/Button";
import Form from "../../../../Form/Form";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../../../../../store/UserStore/UserStoreProvider";
import firebase, {auth} from "../../../../../../firebase";
import {toast} from "react-toastify";
import {rules} from "../../../../../../utils/rules";
import ButtonOne from "../../../../../shared/Buttons/ButtonOne";

const EmailForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [currentPassword, newEmail] = ["currentPassword", "newEmail"];
    const {register, reset, setError, handleSubmit, formState} = useForm({
        defaultValues: {
            [currentPassword]: "",
            [newEmail]: "",
        },
    });

    const {isSubmitting, errors, dirtyFields} = formState
    const resetAndCloseForm = (e) => {
        reset();
        closeForm(e)
    }
    const onSubmit = async (data) => {
        const {currentPassword, newEmail} = data
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        const authenticatedUser = await auth.currentUser.reauthenticateWithCredential(credential).catch(err => {
            console.error(err);
            setError("currentPassword", {
                type: "manual",
                message: 'The password is invalid',
            }, {
                shouldFocus: true
            });
        })
        if (authenticatedUser) {
            auth.currentUser.updateEmail(newEmail).then(() => {
                toast.success('Email updated successfully')
                reset();
                closeForm();
            }).catch(error => {
                if (error.code?.includes('invalid-email')) {
                    setError("newEmail", {
                        type: "manual",
                        message: error.message,
                    }, {
                        shouldFocus: true
                    });
                } else if (error.code?.includes('already-in-use')) {
                    setError("newEmail", {
                        type: "manual",
                        message: error.message,
                    }, {
                        shouldFocus: true
                    });
                } else {
                    toast.error('Server error please try again later');
                }
            });
        }
    }
    return (
        <Form
            resetAndCloseForm={resetAndCloseForm}
            visible={visible}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        >
            <Header headerIcon={faEnvelope} headerText={'Update your email'}/>
            <Description>
                Update your email below.
                There will be a new verification email sent
                that you will need to use to verify this new email.
            </Description>
            <InputsContainer>
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.password}
                    error={errors.currentPassword || null}
                    isDirty={dirtyFields.currentPassword || false}
                    name={currentPassword}
                    autoComplete={'current-password'}
                    type={'password'}
                    placeholder={'Current password'}
                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.email}
                    error={errors.newEmail || null}
                    isDirty={dirtyFields.newEmail || false}
                    name={newEmail}
                    autoComplete={'email'}
                    type={'text'}
                    placeholder={'New email'}
                />
            </InputsContainer>
            <ButtonOne disabled={isSubmitting}>Save Email</ButtonOne>
            <Button disabled={isSubmitting}>Save Email</Button>
        </Form>
    );
};

export default EmailForm;
