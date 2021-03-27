/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React, {useEffect} from "react";
import CreatePostBody from "./CreatePostBody";
import {useUserStore} from "../../store/UserStoreProvider";
import {useNavigate} from "react-router";

const CreatePost = () => {
    const {user} = useUserStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [])
    if (!user) return null;
    return (
        <div css={container}>
            <h2 css={header}>Create Post</h2>
            <CreatePostBody/>
        </div>
    );
}
const container = css`
  min-height: 500px;
  min-width: 380px;
  max-width: 740px;
  padding: 0 8px;
  margin: 0 auto;
`
const header = css`
  padding: 4px;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  margin: 16px 0;
  border-bottom: 1px solid;
`

export default CreatePost