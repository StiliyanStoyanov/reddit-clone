/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import Test from "../Test";
import {css, jsx} from "@emotion/core";
import {useForm} from "react-hook-form";
import {useTheme} from "emotion-theming";
import firebase from "../../firebase";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import NameInput from "./InputFields/NameInput";
import SelectTopics from "./InputFields/SelectTopics";
import DescriptionInput from "./InputFields/DescriptionInput";
import SubmitInput from "./InputFields/SubmitInput";
import {useNavigate} from "@reach/router";

const CreateCommunity = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const createCommunity = firebase.functions().httpsCallable('createCommunity');
    const {register, handleSubmit, errors} = useForm();
    const descriptions = {
        name: 'Community names including capitalization cannot be changed',
        topics: 'This will help relevant users find your community.',
        descriptionText: 'This is how new members come to understand your community.'
    }
    const onSubmit = data => {
        // TODO: Add Convert Topics to array and add array check in cloud functions
        createCommunity(data)
            .then(r => {
                const {data} = r;
                // navigate(`e/${data.name}`);
            })
            .catch(e => {
                // TODO: Implement server error handlers and notifications
                console.log(e.message)
            });

    };
    return (
        <>
            <div css={css` ${pageContainer}; background-color: ${theme.navBackgroundColor}`}>
                <Banner/>
                <div css={contentContainer}>
                    <Header/>
                    <form css={form} onSubmit={handleSubmit(onSubmit)}>
                        <NameInput register={register} descriptionText={descriptions.name}/>
                        <SelectTopics register={register} descriptionText={descriptions.topics}/>
                        <DescriptionInput register={register} descriptionText={descriptions.descriptionText}/>
                        <SubmitInput/>
                    </form>
                </div>
            </div>
            <Test/>
        </>
    );
}

const pageContainer = css`
  height: 100%;
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