/** @jsxImportSource @emotion/react */
import {faUserAltSlash} from "@fortawesome/free-solid-svg-icons/faUserAltSlash";
import Header from "../../../Form/Items/Header";
import Description from "../../../Form/Items/Description";
import InputsContainer from "../../../Form/Items/InputsContainer";
import Input from "../../../Form/Items/Input/Input";
import Form from "../../../Form/Form";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import firebase ,{auth} from "../../../../../firebase";
import {useForm} from "react-hook-form";
import React, {useCallback, useState} from "react";
import SubmitOrCancel from "./SubmitOrCancel";

const DeactivateForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [email, password] = ["email", "password"]
    const formMethods = useForm({
        defaultValues: {
            [email]: "",
            [password]: "",
        },
    });
    const {register, reset, setError, handleSubmit, formState} = formMethods
    const {isSubmitting, errors, dirtyFields} = formState;
    const [rules] = useState(() => {
        return {
            email: {
                required: {value: true, message: "Field is required"},
                validate: (value) => {
                    if (value === user.email) {
                        return true
                    }
                    return 'Please enter your email correctly'
                }
            },
            password: {
                required: {value: true, message: "Field is required"},
                minLength: {value: 6, message: "Password must be at least 6 characters long"},
            }
        }
    })
    const resetAndClose = useCallback(event => {
        reset();
        closeForm(event)
    }, [reset, closeForm])

    const onSubmit = async (data) => {
        const {email, password} = data;
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        await auth.currentUser.reauthenticateWithCredential(credential).catch(err => {
            console.error(err);
            setError("password", {
                type: "manual",
                message: "Something went wrong please try again later"
            });
        })

        // TODO: Change to disable instead of delete (with firebase function)
        auth.currentUser.delete().catch(err =>{
            console.log(err);
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
            <Header headerIcon={faUserAltSlash} headerText={'Deactivate your account'}/>
            <Description>Account Credentials for security purposes</Description>
            <InputsContainer>
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.email}
                    error={errors.email || null}
                    isDirty={dirtyFields.email || false}
                    name={email}
                    type={'text'}
                    placeholder={'Email address'}
                />
                <Input
                    visible={visible}
                    register={register}
                    rules={rules.password}
                    error={errors.password || null}
                    isDirty={dirtyFields.password || false}
                    name={password}
                    type={'password'}
                    placeholder={'Password'}
                />
            </InputsContainer>
            <SubmitOrCancel resetAndClose={resetAndClose} isSubmitting={isSubmitting}/>
        </Form>
    );
};

export default DeactivateForm;
