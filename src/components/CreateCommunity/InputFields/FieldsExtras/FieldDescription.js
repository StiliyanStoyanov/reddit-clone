/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import TooltipOnHover from "./TooltipOnHover";

const FieldDescription = ({descriptionText, tooltipMessage}) => {
    return (
        <div css={descriptionContainer}>
            <p css={description}>
                {descriptionText}
            </p>
            {tooltipMessage && <TooltipOnHover message={tooltipMessage}/>}
        </div>
    );
};

const description = css`
  font-size: 12px;
  color: gray;
  margin: 0;
`

const descriptionContainer = css`
  display: flex;
  position: relative;
  align-items: center;
`

export default FieldDescription;
