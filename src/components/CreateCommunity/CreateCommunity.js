/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import {useForm} from "react-hook-form";
import firebase from "../../firebase";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import NameInput from "./InputFields/NameInput";
import SelectTopics from "./InputFields/Topics/SelectTopics";
import DescriptionInput from "./InputFields/DescriptionInput";
import SubmitInput from "./InputFields/SubmitInput";
import {useNavigate} from "react-router";
import {useUserDispatch, useUserStore} from "../../store/UserStoreProvider";

const descriptions = {
    name: 'Community names including capitalization cannot be changed',
    topics: 'This will help relevant users find your community.',
    descriptionText: 'This is how new members come to understand your community.'
}

const CreateCommunity = () => {
    const navigate = useNavigate();
    const {user} = useUserStore();
    const userDispatch = useUserDispatch();
    const createCommunity = firebase.functions().httpsCallable('createCommunity');
    const {register, control, handleSubmit, setError, formState} = useForm();
    const {errors, isDirty} = formState

    const onSubmit = data => {
        createCommunity(data)
            .then(res => {
                const {data} = res;
                userDispatch({type: "UPDATE_SUBSCRIPTIONS_DATA", payload: data});
                navigate(`e/${data.name}`);
            })
            .catch(e => {
                if (!e.details) {
                    setError("communityName", {
                        type: 'create-community/server-error',
                        message: 'Something went wrong please try again later'
                    }, {shouldFocus: true});
                    return;
                }
                const {code, message} = e.details;
                setError("communityName", {
                    type: code,
                    message: message
                }, {shouldFocus: true});
            });
    };

    if (!user) {
        navigate('/login');
        return null;
    }
    return (
        <>
            <div css={pageContainer}>
                <Banner/>
                <div css={contentContainer}>
                    <Header/>
                    <form css={form} onSubmit={handleSubmit(onSubmit)}>
                        <NameInput
                            register={register}
                            descriptionText={descriptions.name}
                            nameError={errors.communityName}
                        />
                        <SelectTopics
                            register={register}
                            control={control}
                            setError={setError}
                            topicsError={errors.primaryTopic || errors.selectedOptions}
                            descriptionText={descriptions.topics}
                        />
                        <DescriptionInput
                            register={register}
                            descriptionText={descriptions.descriptionText}
                            descriptionError={errors.descriptionText}
                        />
                        <SubmitInput/>
                    </form>
                </div>
            </div>
        </>
    );

}

const pageContainer = theme => css`
  height: 100%;
  background-color: ${theme.background1};
  min-height: calc(100vh - 71px);
  display: flex;
`
const contentContainer = css`
  width: 100%;
  min-width: 280px;
  padding-left: 10px;
`
const form = css`
  display: block;
  max-width: 600px;
  padding-right: 10px;
`

export default CreateCommunity