/** @jsxImportSource @emotion/react */
import Heading from "./Heading";
import ContentContainer from "./ContentContainer";
import React from "react";
import {useMatch} from "react-router";

const Leaderboards = () => {
    return (
        <div css={{label: 'leaderboards'}}>
            <Heading/>
            <ContentContainer/>
        </div>
    );
};

export default Leaderboards;
