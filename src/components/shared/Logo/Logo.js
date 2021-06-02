/** @jsxImportSource @emotion/react */
import {ReactComponent as LogoSVG} from "../../../assets/logo.svg"
import {css} from "@emotion/react";

const Logo = (props) => <LogoSVG css={[logo]} {...props}/>
const logo = css`
  display: block;
  width: 48px;
  height: 48px;
  label: logo
`
export default Logo;
