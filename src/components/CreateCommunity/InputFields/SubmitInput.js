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
              box-shadow: 1px 1px 2px 0 ${theme.theme === 'dark' ? 'black' : 'gray'};
              &:focus {
                outline: 0;
                box-shadow: 0 0 4px ${theme.theme === 'dark' ? 'black' : 'gray'};
              }
              &:active {
                outline: 0;
                box-shadow: inset 0 0 4px #181818;
              }`
            }
            type="submit"
        />
    );
};

export default SubmitInput;
