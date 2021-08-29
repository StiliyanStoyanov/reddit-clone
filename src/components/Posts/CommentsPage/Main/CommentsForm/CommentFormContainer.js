/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useUserStore} from "../../../../../store/UserStore/UserStoreProvider";
import CommentForm from "./CommentForm";
import {Link} from "react-router-dom";
import CommentSignIn from "./CommentSignIn";

const CommentFormContainer = ({addComment, removeComment}) => {
    const {username, isLoadingFirestore} = useUserStore();
    if (isLoadingFirestore) return null;
    if (!username) return <CommentSignIn/>
    return (
        <div>
            <span css={span}>
                Comment as&nbsp;
                <Link to={`/user/${username}`} css={a}>
                    {username}
                </Link>
            </span>
            <CommentForm addComment={addComment} removeComment={removeComment}/>
        </div>
    );
};
const span = css`
  display: block;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 0;
`
const a = theme => css`
  cursor: pointer;
  color: ${theme.colorHighlight6};
  &:hover, &:focus-visible {
    text-decoration: underline;
  }
`

export default CommentFormContainer;
