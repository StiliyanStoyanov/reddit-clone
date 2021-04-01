/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const PanelHeading = ({children}) => {
    return (
        <h2 css={[heading]}>
            {children}
        </h2>
    );
};

const heading = theme => css`
  color: ${theme.settings.color};
  font-size: 20px;
  line-height: 24px;
  margin: 0;
  font-weight: 600;
  padding: 40px 0;
  label: panel-heading
`

export default PanelHeading;
