/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {Spinner} from "../../../../../Loaders/Spinner";

const SelectorSpinner = () => {
    return (
        <div css={container}>
            <Spinner absoluteCenter={false} css={spinner}/>
        </div>
    );
};
const container = css`padding: 16px`
const spinner = css`font-size: 4px`;

export default SelectorSpinner;
