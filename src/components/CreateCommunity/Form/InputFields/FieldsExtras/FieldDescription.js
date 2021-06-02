/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import TooltipOnHover from "./TooltipOnHover";

const FieldDescription = ({description, tooltip}) => {
    return (
        <div css={container}>
            <p css={p}>
                {description}
            </p>
            {tooltip && <TooltipOnHover message={tooltip}/>}
        </div>
    );
};

const p = css`
  font-size: 12px;
  color: gray;
  margin: 0;
`

const container = css`
  position: relative;
  display: flex;
  align-items: center;
`

export default FieldDescription;
