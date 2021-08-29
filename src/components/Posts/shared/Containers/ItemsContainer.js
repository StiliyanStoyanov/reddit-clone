/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {memo} from "react";

const ItemsContainer = ({children, ...props}) => {
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

export default ItemsContainer;
