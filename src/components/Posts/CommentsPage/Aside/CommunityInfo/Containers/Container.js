/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Container = ({children}) => {
    return (
        <div css={[container]}>
            {children}
        </div>
    );
};

const container = css`
  padding: 12px;
  label: community-info-content-container
`

export default Container;
