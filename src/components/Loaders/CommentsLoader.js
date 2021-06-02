/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./styles/animation_style";

const CommentLoader = () => {
    return (
        <div css={[main_container]}>
            <div css={avatar_box_container}>
                <div css={[animation, avatarBox]}/>
            </div>
            <div css={user_container}>
                <div css={[animation, user_box]}/>
                <div css={[animation, content_box]}/>
            </div>
        </div>
    );
};

const main_container = css`
  display: flex;
  padding: 8px 4px;
  margin-top: 10px;
  border-radius: 4px;
  label: loader-container
`
const avatar_box_container = css`
  margin-right: 8px;
`
const avatarBox = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  label: avatar-box
`
const user_container = css`
  width: 100%;
`
const user_box = css`
  width: 50%;
  height: 22px;
  margin-bottom: 8px;
  label: user-box
`
const content_box = css`
  height: 80px;
  width: 99%;
  margin-bottom: 8px;
  label: content-box
`

export default CommentLoader;
