/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {animation} from "./styles/animation_style";
import {card_container, compact_image_container} from "../../styles/card_styles";
import {flex_align_center, flex_grow_1} from "../../styles/general_styles";
import {compact_box_base} from "./styles/loader_styles";
import ScoresPlaceholder from "./ScoresPlaceholder";

const CompactLoader = ({animated = true, background = false, opacity = 0.4, className}) => {
    return (
        <div
            css={[
                card_container,
                css`cursor: default; opacity: ${background ? opacity : 1}`
            ]}
            className={className || null}
        >
            <div css={[flex_align_center, flex_grow_1]}>
                <div css={[animated && animation, compact_image_container, background_color]}/>
                <div css={flex_grow_1}>
                    <div css={[animated && animation, title_box]}/>
                    <div css={[animated && animation, info_box]}/>
                    <div css={flex_align_center}>
                        <ScoresPlaceholder/>
                        <div css={[animated && animation, bottom_box]}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
const background_color = theme => css`
  background-color: ${theme.backgroundLoader};
`
const title_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${compact_box_base};
  width: 50%;
`
const info_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${compact_box_base};
  width: 70%;
`
const bottom_box = theme => css`
  background-color: ${theme.backgroundLoader};
  ${compact_box_base};
  margin: 0 0 0 4px;
  width: 100px;
`

export default CompactLoader;
