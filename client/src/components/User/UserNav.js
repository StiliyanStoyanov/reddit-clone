/** @jsx jsx */
/** @jsxFrag React.Fragment */
/* eslint-disable no-unused-vars */
import React from "react";
import {css, jsx} from "@emotion/core";
import {Link, useParams} from "@reach/router";


const UserNav = () => {
    const {userName} = useParams();

    return (
        <div css={wrapper}>
            <ul css={ul}>
                <li><Link css={a} to={`${userName}/posts`}>Posts</Link></li>
            </ul>
        </div>
    )
}




const a = css`
  text-decoration: none;
`

const ul = css`
  list-style-type: none;
  padding: 0;
`

const wrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  max-width: 100%;
`

export default UserNav;