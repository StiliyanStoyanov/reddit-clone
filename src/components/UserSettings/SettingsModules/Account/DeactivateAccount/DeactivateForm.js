/** @jsxImportSource @emotion/react */
import {useState} from "react";
import {css} from "@emotion/react";
import {faUserAltSlash} from "@fortawesome/free-solid-svg-icons/faUserAltSlash";
import Header from "../../../Form/Items/Header";
import Description from "../../../Form/Items/Description";
import InputsContainer from "../../../Form/Items/InputsContainer";
import Input from "../../../Form/Items/Input";
import Button from "../../../Form/Items/Button";
import {useUserStore} from "../../../../../store/UserStoreProvider";
import firebase ,{auth} from "../../../../../firebase";
import Form from "../../../Form/Form";
import {useForm} from "react-hook-form";

const DeactivateForm = ({visible, closeForm}) => {
    const {user} = useUserStore();
    const [disabled, setDisabled] = useState(false);
    const {register, setError, errors, handleSubmit, control} = useForm();

    const onSubmit = ({emailAddress, password}) => {
        setDisabled(true);
        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        return auth.currentUser.reauthenticateWithCredential(credential).then(res => {
            // TODO: Change to disable instead of deleted later
            auth.currentUser.delete().catch(err => console.log(err));
        }).catch(err => {
            console.log(err);
            setError('password', err);
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
            <Header headerIcon={faUserAltSlash} headerText={'Deactivate your account'}/>
            <Description>Account Credentials for security purposes</Description>
            <InputsContainer>
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        validate: (value) => {
                            if (value === user.email) {
                                return true
                            }
                            return 'Please enter your email correctly'

                        }
                    })}
                    error={errors.emailAddress}
                    name={"emailAddress"}
                    placeholder={'Email address'}
                    type={'text'}
                />
                <Input
                    control={control}
                    visible={visible}
                    register={register({
                        required: {value: true, message: "Field is required"},
                        minLength: {value: 6, message: "Password must be at least 6 characters long"},
                    })}
                    error={errors.password}
                    name={"password"}
                    placeholder={'password'}
                    type={'password'}
                />
            </InputsContainer>
            <div css={css`display: flex; justify-content: flex-end`}>
                <Button type={"button"} onClick={closeForm} css={css`margin-right: 2px`}>Cancel</Button>
                <Button disabled={disabled} css={css`background-color: red`}>Deactivate</Button>
            </div>
        </Form>
    );
};

export default DeactivateForm;
