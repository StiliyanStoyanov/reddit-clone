/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Items = ({children, ...props}) => {
    return (
        <div css={[container]} {...props}>
            {children}
        </div>
    );
};

const container = theme => css`
  width: 100%;
  label: card-items
`

export default Items;
