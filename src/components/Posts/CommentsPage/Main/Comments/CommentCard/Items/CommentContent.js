/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef, useState} from "react";
import useOverflow from "../../../../../../../hooks/useOverflow";
import {ReactMarkdownGFM} from "../../../../../../shared/ReactMarkdownGFM/ReactMarkdownGFM";

// TODO: Replace placeholders
const CommentContent = ({commentBody}) => {
    const ref = useRef(null);
    const isOverflown = useOverflow(ref);
    const [clamp, setClamp] = useState(true);
    const handleClampButton = event => setClamp(prevClamp => !prevClamp)

    return (
        <>
            <div css={[markdown_container, clamp && line_clamp]} ref={ref}>
                <ReactMarkdownGFM>
                    {commentBody}
                </ReactMarkdownGFM>
            </div>
            {isOverflown &&
            <button onClick={handleClampButton} css={[clamp_button]}>
                {clamp ? 'Show more' : 'Show less'}
            </button>
            }
        </>
    );
};
const markdown_container = css`
  padding: 0 4px;
  font-size: 14px;
  display: -webkit-box;
  word-break: break-word;
  -webkit-line-clamp: none;
  -webkit-box-orient: vertical;
  overflow: hidden;
  label: comment-content
`
const clamp_button = theme => css`
  color: ${theme.color2};
  font-weight: 700;
  margin: 0 2px;
  background-color: transparent;
  &:hover, &:focus-visible {
    text-decoration: underline;
  }
`
const line_clamp = css`
  -webkit-line-clamp: 3;
`
export default CommentContent;
