/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Link} from "react-router-dom";
import {link_clear_decoration} from "../../../styles/general_styles";

const CardCommunity = ({name, imageUrl}) => {
    return (
        <Link css={link} to={`/e/${name}`}>
            <img css={img} src={imageUrl} alt={name}/>
            <span css={span}>{`e/${name}`}</span>
        </Link>
    );
};

const link = css`
  display: flex;
  align-items: center;
  color: inherit;
  ${link_clear_decoration};
  label: card-link
`
const img = css`
  display: block;
  max-width: 40px;
  max-height: 40px;
  margin-right: 8px;
  background-color: royalblue;
  border-radius: 50%;
  label: card-image
`

const span = css`
  font-weight: 700;
  font-size: 18px;
  label: card-community-name
`

export default CardCommunity;
