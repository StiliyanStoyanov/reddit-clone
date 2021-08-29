/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const InfoContainer = ({children, ...props}) => {
    return (
        <div css={[info_container]} {...props}>
            {children}
        </div>
    )
}

const info_container = css`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 8px;
  label: card-info
`

export default InfoContainer



