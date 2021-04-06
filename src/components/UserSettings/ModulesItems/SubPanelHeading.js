/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const SubPanelHeading = ({children}) => {
    return (
        <h3 css={[heading]}>{children}</h3>
    );
};
const heading = theme => css`
  font: inherit;
  margin: 0 0 32px;
  padding: 0 0 6px;
  border: 0;
  vertical-align: baseline;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 2px solid ${theme.border1};
  color: ${theme.color2};
  label: sub-panel-heading
`

export default SubPanelHeading;
