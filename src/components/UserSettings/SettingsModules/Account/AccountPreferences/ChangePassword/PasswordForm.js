import React, {useState} from "react";
import Header from "../../../../Form/Items/Header";
import {faLock} from "@fortawesome/free-solid-svg-icons/faLock";
import Description from "../../../../Form/Items/Description";
import InputsContainer from "../../../../Form/Items/InputsContainer";
import Input from "../../../../Form/Items/Input";
import Button from "../../../../Form/Items/Button";
import Form from "../../../../Form/Form";
import {useForm} from "react-hook-form";
import firebase ,{auth} from "../../../../../../firebase";
import {useUserStore} from "../../../../../../store/UserStoreProvider";

const PasswordForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [disabled, setDisabled] = useState(false);
    const {register, setError, errors, handleSubmit, watch, control} = useForm();

    const onSubmit = ({oldPassword, newPassword, confirmPassword}) => {
        setDisabled(true);
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            oldPassword
        );
        return auth.currentUser.reauthenticateWithCredential(credential).then(res => {
            auth.currentUser.updatePassword(newPassword).then(res => {
                console.log('password updated');
                setDisabled(false);
                closeForm();
            }).catch(err => {
                console.log(err);
                setDisabled(false);
            });
        }).catch(err => {
            setError('oldPassword', err);
            setDisabled(false);
        })
    }
    return (
        <Form
            visible={visible}
            closeForm={closeForm}
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        >
            <Header headerIcon={faLock} headerText={'Update your password'}/>
            <Description>Update your password below.</Description>
            <InputsContainer>
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        minLength: {value: 6, message: "Password must be at least 6 characters long"},
                    })}
                    error={errors.oldPassword}
                    name={"oldPassword"}
                    placeholder={'Old password'}
                    type={'password'}
                />
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        minLength: {value: 6, message: "Password must be at least 6 characters long"},
                    })}
                    error={errors.newPassword}
                    name={"newPassword"}
                    placeholder={'New password'}
                    type={'password'}
                />

                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        minLength: {value: 6, message: "Password must be at least 6 characters long"},
                        validate: (value) => {
                            if (value === watch('newPassword')) {
                                return true
                            }
                            return 'Passwords do not match'

                        }
                    })}
                    error={errors.confirmPassword}
                    name={"confirmPassword"}
                    placeholder={'Confirm new password'}
                    type={'password'}
                />
            </InputsContainer>
            <Button disabled={disabled}>Change</Button>
        </Form>
    );
};

export default PasswordForm;
