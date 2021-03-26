/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import CommentsSortSelect from "./CommentsSortSelect/CommentsSortSelect";
import CommentCard from "./CommentCard/CommentCard";
import CommentFormWrapper from "../CommentsForm/CommentFormWrapper";
import React from "react";

const Comments = () => {
    const theme = useTheme();
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <>
            <CommentFormWrapper/>
            <div css={container(theme)}>
                <CommentsSortSelect/>
                {arr.map(item => {
                    return <CommentCard key={item}/>
                })}
            </div>
        </>
    );
};

const container = theme => css`
  max-width: 600px;
  width: 100%;
  padding: 0 8px;
`

export default Comments;
