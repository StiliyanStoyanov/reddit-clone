import React, {useState} from "react";
import Header from "../../../../Form/Items/Header";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Description from "../../../../Form/Items/Description";
import InputsContainer from "../../../../Form/Items/InputsContainer";
import Input from "../../../../Form/Items/Input/Input";
import Button from "../../../../Form/Items/Button";
import Form from "../../../../Form/Form";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import firebase, {auth} from "../../../../../../firebase";
import {validateEmail} from "../../../../../../utils/validateEmail";
import {toast} from "react-toastify";

const EmailForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [currentPassword, newEmail] = ["currentPassword", "newEmail"];
    const formMethods = useForm({
        defaultValues: {
            [currentPassword]: "",
            [newEmail]: "",
        },
    });
    const {register, reset, setError, handleSubmit, formState} = formMethods
    const {isSubmitting, errors, dirtyFields} = formState
    const [rules] = useState(() => {
        return {
            currentPassword: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters long"},
            },
            newEmail: {
                required: {value: true, message: "Field is required"},
                validate: validateEmail
            }
        }
    })
    const notify = message => toast.dark(message);
    const onSubmit = async (data) => {
        const {currentPassword, newEmail} = data
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        await auth.currentUser.reauthenticateWithCredential(credential).catch(err => {
            console.error(err);
            setError('currentPassword', {
                type: "manual",
                message: err.message,
            }, {
                shouldFocus: true
            });
        })

        return auth.currentUser.updateEmail(newEmail).then(() => {
            notify("🚀 Email successfully updated");
            reset();
            closeForm();
        }).catch(err => {
            console.error(err);
            setError("newEmail", {
                type: "manual",
                message: "Something went wrong updating your email",
            })
        });
    }
    return (
        <Form
            reset={reset}
            visible={visible}
            closeForm={closeForm}
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
                    rules={rules.currentPassword}
                    error={errors.currentPassword || null}
                    isDirty={dirtyFields.currentPassword || false}
                    name={currentPassword}
                    type={'password'}
                    placeholder={'Current password'}
                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.newEmail}
                    error={errors.newEmail || null}
                    isDirty={dirtyFields.newEmail || false}
                    name={newEmail}
                    type={'text'}
                    placeholder={'New email'}
                />
            </InputsContainer>
            <Button disabled={isSubmitting}>Save Email</Button>
        </Form>
    );
};

export default EmailForm;
