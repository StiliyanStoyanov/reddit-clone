/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const ItemContainer = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  label: community-info-item
`

export default ItemContainer;
