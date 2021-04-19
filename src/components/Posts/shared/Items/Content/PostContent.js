/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useRef} from "react";
import useOverflow from "../../../../../hooks/useOverflow";

const PostContent = ({content}) => {
    const ref = useRef();
    const isOverflown = useOverflow(ref);
    return (
        <p
            ref={ref}
            css={[p, isOverflown && maskImage]}
        >
            {content}
        </p>
    );
};
const p = theme => css`
  max-height: 380px;
  color: ${theme.colorHighlight1};
  margin: 8px 0 0;
  padding: 5px 8px 10px;
  overflow: hidden;
`
const maskImage = css`
  mask-image: linear-gradient(180deg, #000 60%, transparent);
`



export default PostContent;
