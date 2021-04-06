import React, {useState} from "react";
import Header from "../../../../Form/Items/Header";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import Description from "../../../../Form/Items/Description";
import InputsContainer from "../../../../Form/Items/InputsContainer";
import Input from "../../../../Form/Items/Input/Input";
import Button from "../../../../Form/Items/Button";
import Form from "../../../../Form/Form";
import {useForm} from "react-hook-form";
import firebase ,{auth} from "../../../../../../firebase";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import {toast} from "react-toastify";

const PasswordForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [oldPassword, newPassword, confirmPassword] = ["oldPassword", "newPassword", "confirmPassword"]
    const formMethods = useForm({
        defaultValues: {
            [oldPassword]: "",
            [newPassword]: "",
            [confirmPassword]: ""
        },
    });
    const {register, reset, setError, handleSubmit, watch, formState} = formMethods
    const {isSubmitting, errors, dirtyFields} = formState;
    const [rules] = useState(() => {
        return {
            oldPassword: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters long"},
            },
            newPassword: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters long"}
            },
            confirmPassword: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters long"},
                validate: (value) => {
                    if (value === watch(newPassword)) {
                        return true
                    }
                    return "Passwords do not match"

                }
            }
        }
    })
    const onSubmit = async (data) => {
        const {oldPassword, newPassword, confirmPassword} = data
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            oldPassword
        )
        await auth.currentUser.reauthenticateWithCredential(credential).catch(err => {
            console.error(err);
            setError("oldPassword", {
                type: "manual",
                message: "Something went wrong try again later"
            })
        })

        auth.currentUser.updatePassword(newPassword).then(res => {
            toast.dark("🚀 password updated!", {
                autoClose: 2000,
                hideProgressBar: true
            })
            console.log("Password successfully updated");
            reset();
            closeForm();
        }).catch(err => {
            console.error(err);
            toast.dark("Something went wrong try again later");
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
            <Header headerIcon={faLock} headerText={'Update your password'}/>
            <Description>Update your password below.</Description>
            <InputsContainer>
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.oldPassword}
                    error={errors.oldPassword || null}
                    isDirty={dirtyFields.oldPassword || false}
                    name={oldPassword}
                    type={'password'}
                    placeholder={'Old password'}

                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.newPassword}
                    error={errors.newPassword || null}
                    isDirty={dirtyFields.newPassword || false}
                    name={newPassword}
                    type={'password'}
                    placeholder={'New password'}
                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.confirmPassword}
                    error={errors.confirmPassword}
                    isDirty={dirtyFields.confirmPassword || false}
                    name={confirmPassword}
                    type={'password'}
                    placeholder={'Confirm new password'}
                />
            </InputsContainer>
            <Button disabled={isSubmitting}>Change</Button>
        </Form>
    );
};

export default PasswordForm;
