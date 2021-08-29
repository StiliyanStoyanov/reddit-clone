/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DialogHeader = ({children}) => {

    return (
        <h2 css={[h2]}>
            {children}
        </h2>
    );
};

const h2 = theme => css`
  color: ${theme.color1};
  font-weight: 700;
  margin: 0;
  font-size: 20px;
  label: dialog-heading;
`

export default DialogHeader;
