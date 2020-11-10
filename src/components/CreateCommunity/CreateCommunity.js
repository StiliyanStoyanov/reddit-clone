/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import {css, jsx} from "@emotion/core";
import {useForm} from "react-hook-form";
import {useTheme} from "emotion-theming";
import firebase from "../../firebase";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import NameInput from "./InputFields/NameInput";
import SelectTopics from "./InputFields/Topics/SelectTopics";
import DescriptionInput from "./InputFields/DescriptionInput";
import SubmitInput from "./InputFields/SubmitInput";
import {useNavigate} from "@reach/router";
import {useUserDispatch} from "../../store/UserStoreProvider";

const descriptions = {
    name: 'Community names including capitalization cannot be changed',
    topics: 'This will help relevant users find your community.',
    descriptionText: 'This is how new members come to understand your community.'
}

const CreateCommunity = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const userDispatch = useUserDispatch();
    const createCommunity = firebase.functions().httpsCallable('createCommunity');
    const {register, control, handleSubmit, setError, errors} = useForm();
    const onSubmit = data => {
        // TODO: Add Convert Topics to array and add array check in cloud functions
        createCommunity(data)
            .then(r => {
                const {data} = r;
                userDispatch({type: "UPDATE_SUBSCRIPTIONS_DATA", payload: data});
                navigate(`e/${data.name}`);
            })
            .catch(e => {
                if (!e.details) {
                    setError("communityName", {
                        type: 'create-community/server-error',
                        message: 'Something went wrong please try again later'
                    });
                    return;
                }
                const {code, message} = e.details;
                setError("communityName", {
                    type: code,
                    message: message
                });
            });
    };
    return (
        <>
            <div css={css(pageContainer(theme))}>
                <Banner/>
                <div css={contentContainer}>
                    <Header/>
                    <form css={form} onSubmit={handleSubmit(onSubmit)}>
                        <NameInput register={register} descriptionText={descriptions.name} nameError={errors.communityName}/>
                        <SelectTopics register={register} control={control} topicsError={errors.primaryTopic || errors.additionalTopics} descriptionText={descriptions.topics}/>
                        <DescriptionInput register={register} descriptionText={descriptions.descriptionText} descriptionError={errors.descriptionText}/>
                        <SubmitInput/>
                    </form>
                </div>
            </div>
        </>
    );
}

const pageContainer= theme => css`
  height: 100%;
  background-color: ${theme.createCommunity.backgroundColor};
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