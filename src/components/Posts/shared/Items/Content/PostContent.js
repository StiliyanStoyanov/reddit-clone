/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useRef} from "react";
import useOverflow from "../../../../../hooks/useOverflow";

const PostContent = ({content}) => {
    const theme = useTheme();
    const ref = useRef();
    const isOverflown = useOverflow(ref);
    return (
        <p
            ref={ref}
            css={textContainer(theme.post, isOverflown)}
        >
            {content}
        </p>
    );
};

const maskImage = css`
  mask-image: linear-gradient(180deg, #000 60%, transparent);
`
const textContainer = (theme, isOverflown) => css`
  max-height: 380px;
  color: ${theme.textColor};
  margin: 8px 0 0;
  padding: 5px 8px 10px;
  overflow: hidden;
  ${isOverflown && maskImage}
`


export default PostContent;
