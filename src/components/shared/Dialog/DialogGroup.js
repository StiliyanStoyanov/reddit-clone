/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DialogGroup = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container =  css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 100%;
  font-weight: 600;
  font-size: 14px;
  
`

export default DialogGroup;
