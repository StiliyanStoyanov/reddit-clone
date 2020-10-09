/* eslint-disable no-unused-vars */
/** @jsx jsx */
/** @jsxFrag React.Fragment */
import React from "react";
import Test from "../Test";
import {css, jsx} from "@emotion/core";
import {useForm} from "react-hook-form";
import {useTheme} from "emotion-theming";
import firebase from "../../firebase";

const CreateCommunity = () => {
    const theme = useTheme();
    const createCommunity = firebase.functions().httpsCallable('createCommunity');
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        createCommunity(data)
            .then(r => console.log(r))
            .catch(e => console.log(e));
    };
    const topics =
        [
            'Animals and Pets', 'Anime', 'Art', 'Business, Economics and Finance',
            'Careers', 'Cars and Motor Vehicles', 'Crypto', 'Family and Relationships', 'Fitness and Nutrition',
            'Food and Drink', 'Funny/Humor', 'Gaming', 'History', 'Hobbies', 'Home and Garden',
            'Internet Culture and Memes', 'Law', 'Learning and Education', 'Marketplace and Deals',
            'Military', 'Movies', 'Music', 'Outdoors and Nature', 'Politics', 'Programming' , 'Reading, Writing and Literature',
            'Religion and Spirituality', 'Science', 'Sexual Orientation', 'Sports', 'Technology', 'Television', 'Travel', 'World News',
            'None of those Topics'
        ]
    const options = topics.map(topic => <option key={topic} value={topic}>{topic}</option>)
    return (
        <>
            <div css={css` ${pageContainer}; background-color: ${theme.navBackgroundColor}`}>
                <div css={css`
                  ${banner};
                  background-color: ${theme.navIconActiveColor};
`               }/>
                <div css={contentContainer}>
                    <h1 css={css(
                        header, {
                            borderBottom: `1px solid ${theme.borderColor}`
                        }
                    )}>Create a community</h1>
                    <form css={form} onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="communityName" css={css({display: "block"})}>Name *</label>
                        <div css={infoContainer}>
                            <p css={description}>
                                Community names including capitalization cannot be changed
                            </p>
                            <span css={css`
                              ${infoSpanHover};
                              background-color: ${theme.navIconActiveColor};
                              &:hover {
                                &::after {
                                  background-color: ${theme.navIconActiveColor};
                                  content: "CONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENT";
                                  text-wrap: normal;
                                  overflow: auto;
                                }
                              }
                            `}>?</span>
                        </div>
                        <input css={inputBase} type="text" name="communityName" ref={register({required: true, maxLength: 80})}/>

                        <label htmlFor="topics" css={css`display: block; margin-top: 40px`}>Topics *</label>
                        <div css={infoContainer}>
                            <p css={description}>
                                This will help relevant users find your community. 0/25
                            </p>
                        </div>
                        <select css={inputBase} name="topics" defaultValue={"select-topic"} ref={register({ required: true })}>
                            <option value="select-topic" disabled>Select Topic</option>
                            {options}
                        </select>

                        <label htmlFor="description" css={css`display: block; margin-top: 40px`}>Description *</label>
                        <div css={infoContainer}>
                            <p css={description}>
                                This is how new members come to understand your community.
                            </p>
                        </div>
                        <textarea css={css`
                            ${inputBase};
                            resize: vertical;
                            max-height: 400px;
                            min-height: 40px;
                            padding-top: 6px;
                        `} rows="1" name="description" ref={register({required: true, minLength: 3, maxLength: 300})} />

                        <input css={css`
                            display: block;
                            border: 0;
                            color: ${theme.color};
                            height: 40px;
                            width: 100px;
                            margin: 50px auto 0;
                            border-radius: 4px;
                            background-color: ${theme.navIconActiveColor};
                            box-shadow: 0 2px 0 0 black;
                            &:active {
                              outline: none;
                              box-shadow: inset 0 0 4px #000000;
                            }
                        `}
                               type="submit" />
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
const banner = css`
  display: block;
  width: 25%;
  min-width: 100px;
  min-height: 100%;
`
const contentContainer = css`
  width: 75%;
  min-width: 280px;
  margin-left: 10px;
`
const infoContainer = css`
  display: flex;
  align-items: center;
`
const description = css`
  font-size: 12px;
  color: gray;
  margin: 0;
`
const infoSpanHover = css`
  display: flex;
  position: relative;
  justify-content: center;
  margin-left: 5px;
  font-weight: 900;
  font-size: 8px;
  width: 12px;
  height: 12px;
  background-color: gray;
  border-radius: 50%;
  &:hover {
    &::after {
      position: absolute;
      right: 0;
      bottom: -40px;
      font-size: 12px;
      padding: 10px;
      border-radius: 4px;
      width: 200px;
      background-color: darkblue;
    }
  }
`
const inputBase = css`
  display: block;
  background-color: #1a1a1b;
  color: white;
  outline: none;
  border: 2px solid #343434;
  font-size: 18px;
  height: 40px;
  border-radius: 4px;
  width: 100%;
  margin-top: 5px;
  &:focus {
    border-color: white;
  }
`
const form = css`
  display: block;
  max-width: 600px;
  margin-right: 10px;
`
const header = css`
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 16px;
`
export default CreateCommunity