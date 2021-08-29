/** @jsxImportSource @emotion/react */
import {compact_image_container} from "../../../../styles/card_styles";

const Image = ({src}) => {
    return (
        <img src={src} alt="NotFount" css={compact_image_container}/>
    );
};

export default Image;
