/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./styles/animation_style";
import {card_container} from "../../styles/card_styles";
import {card_box_base} from "./styles/loader_styles";
import {flex_grow_1, flex_row} from "../../styles/general_styles";
import ScoresPlaceholder from "./ScoresPlaceholder";

const CardLoader = ({animated = true, background = false, opacity= 0.4, className}) => {
    return (
        <div css={[card_container, css`cursor: default; opacity: ${background ? opacity : 1 }`]} className={className || null}>
            <div css={flex_grow_1}>
                <div css={[animated && animation, info_box]}/>
                <div css={[animated && animation, title_box]}/>
                <div css={[animated && animation, content_box]}/>
                <div css={[flex_row, card_box_base]}>
                    <ScoresPlaceholder/>
                    <div css={[animated && animation, bottom_box]}/>
                </div>
            </div>
        </div>
    );
}

const info_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${card_box_base};
  width: 50%;
  label: info-box;
`
const title_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${card_box_base};
  width: 70%;
  label: title-box;
`
const content_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${card_box_base};
  width: 98%;
  height: 220px;
  label: content-box;
`

const bottom_box = theme => css`
  background-color: ${theme.backgroundLoader};
  width: 100px;
  border-radius: 4px;
  label: bottom-box;
`

export default CardLoader;
