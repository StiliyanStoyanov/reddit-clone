/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import LoadersGroup from "../../Loaders/LoadersGroup";

const EmptyQueryBackground = ({type = 'compact', opacity= 0.4, compactLength = 10, cardLength = 3,  children}) => {
    return (
        <div css={[container]}>
            {type === 'compact' &&
            <LoadersGroup
                animated={false}
                background={true}
                opacity={opacity}
                type={'compact'}
                length={compactLength}
            />}
            {type === 'card' &&
            <LoadersGroup
                animated={false}
                background={true}
                opacity={opacity}
                type={'card'}
                length={cardLength}
            />}
            {children}
        </div>
    );
};
const container = theme => css`position: relative;`

export default EmptyQueryBackground;
