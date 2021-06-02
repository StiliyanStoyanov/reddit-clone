/** @jsxImportSource @emotion/react */
import React from "react";
import {css} from "@emotion/react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Form from "./Form/Form";

const CreateCommunity = () => {
    return (
        <>
            <div css={pageContainer}>
                <Banner/>
                <div css={contentContainer}>
                    <Header/>
                    <Form/>
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
  padding-left: 10px;
`

export default CreateCommunity