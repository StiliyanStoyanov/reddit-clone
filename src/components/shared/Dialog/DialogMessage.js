/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DialogMessage = ({children, ...props}) => {
    return (
        <p css={p} {...props}>
            {children}
        </p>
    );
};

const p = theme => css`
  color: ${theme.color2};
  margin: 4px 0;
  word-break: break-word;
`

export default DialogMessage;
