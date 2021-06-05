/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Title = ({title}) => {
    return (
        <h3 css={heading}>
            {title}
        </h3>
    );
};

const heading =  css`
  margin: 4px auto;
  font-size: 20px;
`

export default Title;
