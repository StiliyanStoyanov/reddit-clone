/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";

const PostCardContainer = ({children, to, post}) => {
    const {docSnapshot, ...postDataWithoutSnapshot} = post;
    const locationState = {
        ...postDataWithoutSnapshot,
        fromFeed: true
    }
    return (
        <div css={[container]}>
            {children}
            <Link
                css={[linkStyle]}
                to={to}
                state={locationState}
                tabIndex={-1}
            />
        </div>
    );
}

const container = theme => css`
  position: relative;
  z-index: 1;
  margin: 10px auto;
  display: flex;
  padding-left: 36px;
  border: 1px solid ${theme.border1};
  background-color: ${theme.background1};
  border-radius: 4px;
  min-width: 380px;
  max-width: 700px;
  min-height: 88px;
  max-height: 500px;
  width: 100%;
  cursor: pointer;
  &:hover, &:active {
    border: 1px solid ${theme.color2};
  }
  @media (max-width: 420px) {
    padding-left: 0;
  }
  label: card-container
`
const linkStyle = css`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  label: card-link
`

export default PostCardContainer;
