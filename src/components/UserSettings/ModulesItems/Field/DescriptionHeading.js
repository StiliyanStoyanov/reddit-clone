/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DescriptionHeading = ({children}) => {
    return (
        <div css={[container]}>
            <h4 css={[heading]}>
                {children}
            </h4>
        </div>
    );
};
const container = css`
  display: flex;
  align-items: center;
  label: description-heading-container
`
const heading = theme => css`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${theme.settings.color};
  display: flex;
  margin: 0 0 4px;
  label: description-heading
`

export default DescriptionHeading;
