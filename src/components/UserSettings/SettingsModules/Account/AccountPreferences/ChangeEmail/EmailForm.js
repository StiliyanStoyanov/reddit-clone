import React, {useState} from "react";
import Header from "../../../../Form/Items/Header";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Description from "../../../../Form/Items/Description";
import InputsContainer from "../../../../Form/Items/InputsContainer";
import Input from "../../../../Form/Items/Input";
import Button from "../../../../Form/Items/Button";
import Form from "../../../../Form/Form";
import {useForm} from "react-hook-form";
import {useUserStore} from "../../../../../../store/UserStoreProvider";
import firebase, {auth} from "../../../../../../firebase";
import {validateEmail} from "../../../../../../utils/validateEmail";

const EmailForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [disabled, setDisabled] = useState(false);
    const {register, setError, errors, handleSubmit, control} = useForm();

    const onSubmit = ({currentPassword, newEmail}) => {
        setDisabled(true);
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            currentPassword
        );
        return auth.currentUser.reauthenticateWithCredential(credential).then(res => {
            auth.currentUser.updateEmail(newEmail).then(res => {
                console.log('email updated');
                setDisabled(false);
                closeForm();
            }).catch(err => {
                console.log(err);
                setDisabled(false);
            });
        }).catch(err => {
            setError('currentPassword', err);
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
            <Header headerIcon={faEnvelope} headerText={'Update your email'}/>
            <Description>
                Update your email below.
                There will be a new verification email sent
                that you will need to use to verify this new email.
            </Description>
            <InputsContainer>
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        minLength: {value: 6, message: "Password must be at least 6 characters long"},
                    })}
                    error={errors.currentPassword}
                    name={"currentPassword"}
                    placeholder={'Current password'}
                    type={'password'}
                />
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        validate: validateEmail
                    })}
                    error={errors.newEmail}
                    name={'newEmail'}
                    placeholder={'New email'}
                    type={'text'}
                />
            </InputsContainer>
            <Button disabled={disabled}>Save Email</Button>
        </Form>
    );
};

export default EmailForm;
