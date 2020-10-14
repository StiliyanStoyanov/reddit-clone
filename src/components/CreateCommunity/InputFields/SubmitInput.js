/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const SubmitInput = () => {
    const theme = useTheme();
    return (
        <input
            css={css`
              display: block;
              border: 0;
              color: ${theme.color};
              height: 40px;
              width: 100px;
              margin: 50px auto 0;
              border-radius: 4px;
              background-color: ${theme.navIconActiveColor};
              box-shadow: 0 2px 0 0 black;
              &:focus {
                outline: 0;
                box-shadow: 0 0 4px #ffffff;
              }
              &:active {
                outline: 0;
                box-shadow: inset 0 0 4px #000000;
              }`
            }
            type="submit"
        />
    );
};

export default SubmitInput;
