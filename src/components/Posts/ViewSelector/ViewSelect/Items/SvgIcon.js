/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";

const Svg = ({Svg, secondary, ...props}) => {
    const theme = useTheme();
    return (
        <Svg css={[svgStyle(theme), secondary && secondarySvgStyle(theme)]} {...props}/>
    );
};

const svgStyle = theme => css`
  fill: ${theme.itemActive};
  width: 20px;
  height: 20px;
  margin: 0 4px;
  &:focus {
    fill: ${theme.itemActive};
  }
`
const secondarySvgStyle = (theme) => css`
  fill: ${theme.itemDefault};
`;
export default Svg;
