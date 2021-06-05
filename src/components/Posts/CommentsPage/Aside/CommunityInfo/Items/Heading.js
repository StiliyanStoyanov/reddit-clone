/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const Heading = () => {
    return (
        <h2 css={[heading]}>
            About Community
        </h2>
    );
};

const heading = theme => css`
  padding: 12px 12px 0;
  margin: 0;
  color: ${theme.colorHighlight1};
  label: community-info-heading
`

export default Heading;
