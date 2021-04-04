/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const DropdownSpan = ({children}) => {
    return (
        <span css={[span]}>
            {children}
        </span>
    );
};

const span = css`
  font-size: 16px;
  padding-bottom: 4px;
  label: dropdown-text-span
`

export default DropdownSpan;
