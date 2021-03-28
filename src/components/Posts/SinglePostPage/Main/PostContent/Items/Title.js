/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Title = ({title}) => {
    return (
        <h3 css={headerContainer}>
            {title}
        </h3>
    );
};

const headerContainer =  css`
  margin: 0 auto;
  padding: 0 8px 8px;
  font-size: 20px;
  max-width: 600px;
  width: 100%;
`

export default Title;
