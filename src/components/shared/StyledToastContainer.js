/** @jsxImportSource @emotion/react */
import {memo} from 'react'
import {ToastContainer, Zoom} from "react-toastify";
import {css} from "@emotion/react";
import 'react-toastify/dist/ReactToastify.min.css'
// https://fkhadra.github.io/react-toastify/how-to-style/
// https://emotion.sh/docs/class-names
// https://stackoverflow.com/questions/50840641/how-to-pass-multiple-classnames-to-inner-children-with-emotion-js
export const StyledToastContainer = memo((props) => {
    return (
        <div>
            <ToastContainer
                limit={5}
                position="bottom-center"
                hideProgressBar={true}
                transition={Zoom}
                autoClose={false}
                css={toast_styles} {...props}
            />
        </div>

    )
})

const toast_base = theme => css`
  position: relative;
  width: 100%;
  background-color: ${theme.background1};
`
const toast_banner = color => css`
  &::before {
    left: 0;
    top: 0;
    position: absolute;
    content: '';
    height: 100%;
    background-color: ${color};
    width: 6px;
  }
`
const toast_styles = theme => css`
  color: ${theme.color1};
  .Toastify__close-button {
    color: ${theme.color1};
  }
  .Toastify__toast--success {
    ${toast_base(theme)};
    ${toast_banner('#006644')};
  }
  .Toastify__toast--info {
    position: relative;
    background-color: ${theme.background1};
    ${toast_banner('#91a7ff')};
  }
  .Toastify__toast--error {
    position: relative;
    background-color: ${theme.background1};
    ${toast_banner('#bf2600')};
  }
`

