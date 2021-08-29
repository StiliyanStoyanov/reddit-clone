/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef} from "react";
import useOverflow from "../../../../../hooks/useOverflow";
import {ReactMarkdownGFM} from "../../../../shared/ReactMarkdownGFM/ReactMarkdownGFM";

const PostContent = ({content}) => {
    const ref = useRef();
    const isOverflown = useOverflow(ref);
    return (
        <div ref={ref} css={[p, isOverflown && mask_image]}>
            <ReactMarkdownGFM children={content}/>
        </div>
    );
};
const p = theme => css`
  max-height: 380px;
  color: ${theme.colorHighlight1};
  padding: 5px 8px 10px;
  overflow: hidden;
`
const mask_image = css`
  mask-image: linear-gradient(180deg, #000 60%, transparent);
`



export default PostContent;
