/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const CardAbout = ({about}) => {
    return (
        <p css={[p]}>{about}</p>
    );
};
const p = theme => css`
  margin: 0;
  color: ${theme.color2};
  font-size: 14px;
  padding: 8px;
  label: about
`

export default CardAbout;
