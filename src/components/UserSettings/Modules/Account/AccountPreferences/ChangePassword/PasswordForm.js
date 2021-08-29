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
import {useUserStore} from "../../../../../../store/UserStore/UserStoreProvider";
import {toast} from "react-toastify";
import {rules} from "../../../../../../utils/rules";

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
    const [confirmPasswordRules] = useState(() => ({
        confirmPassword: {
            ...rules.password,
            validate: (value) => {
                if (value === watch(newPassword)) {
                    return true
                }
                return "Passwords do not match"

            }
        }
    }))
    const resetAndCloseForm = (e) => {
        reset();
        closeForm(e)
    }
    const onSubmit = async (data) => {
        const {oldPassword, newPassword} = data
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            oldPassword
        )
        const authenticatedUser = await auth.currentUser.reauthenticateWithCredential(credential).catch(error => {
            console.error(error);
            setError("oldPassword", {
                type: "manual",
                message: "The password is invalid"
            });
        })

        if (authenticatedUser) {
            await auth.currentUser.updatePassword(newPassword).then(() => {
                toast.success("Password updated");
                resetAndCloseForm();
            }).catch(error => {
                toast.error('Server error please try again later');
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
            <Header headerIcon={faLock} headerText={'Update your password'}/>
            <Description>Update your password below.</Description>
            <InputsContainer>
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.password}
                    error={errors.oldPassword || null}
                    isDirty={dirtyFields.oldPassword || false}
                    name={oldPassword}
                    autoComplete={'current-password'}
                    type={'password'}
                    placeholder={'Old password'}

                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.password}
                    error={errors.newPassword || null}
                    isDirty={dirtyFields.newPassword || false}
                    name={newPassword}
                    autoComplete={'new-password'}
                    type={'password'}
                    placeholder={'New password'}
                />
                <Input
                    visible={visible}
                    register={register}
                    rules={confirmPasswordRules}
                    error={errors.confirmPassword}
                    isDirty={dirtyFields.confirmPassword || false}
                    name={confirmPassword}
                    autoComplete={'new-password'}
                    type={'password'}
                    placeholder={'Confirm new password'}
                />
            </InputsContainer>
            <Button disabled={isSubmitting}>Change</Button>
        </Form>
    );
};

export default PasswordForm;
