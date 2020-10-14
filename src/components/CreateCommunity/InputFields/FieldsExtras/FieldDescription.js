/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const FieldDescription = ({descriptionText, Tooltip}) => {
    return (
        <div css={descriptionContainer}>
            <p css={description}>
                {descriptionText}
            </p>
            {Tooltip && <Tooltip/>}
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
  align-items: center;
`

export default FieldDescription;
