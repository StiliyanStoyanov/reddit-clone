/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Content = ({content, contentType, children}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <div css={contentContainer(theme)}>
                {content}
            </div>
        </div>
    );
};

const container = theme => css`
  margin-top: 8px;
`
const contentContainer = theme => css`
  padding: 5px 8px 10px;
  max-height: 250px;
  mask-image: linear-gradient(180deg,#000 60%,transparent);
`

export default Content;
