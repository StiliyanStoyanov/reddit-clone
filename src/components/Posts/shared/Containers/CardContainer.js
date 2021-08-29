/** @jsxImportSource @emotion/react */
import {card_container} from "../../../../styles/card_styles";
const CardContainer = ({children}) => {
    return (
        <div css={[card_container]}>
            {children}
        </div>
    );
}
export default CardContainer;
