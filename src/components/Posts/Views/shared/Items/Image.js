/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
const Image = ({src}) => {
    const theme = useTheme();
    return (
        <img src={src} alt="NotFount" css={imageStyle(theme)}/>
    );
};

const imageStyle = theme => css`
  width: 80px;
  height: 60px;
  border-radius: 4px;
  background-color: #202021;
  
`

export default Image;
