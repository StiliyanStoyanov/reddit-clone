/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";

const Button = ({children, ...props}) => {
    const theme = useTheme();
    return (
        <div css={css`align-items: center; display: flex; flex-grow: 1; justify-content: flex-end`}>
            <div css={css`float: right; position: relative`}>
                <button css={button(theme)} type="button" {...props}>
                    {children}
                </button>
            </div>
        </div>

    );
};

const button = theme => css`
  border: 1px solid ${theme.settings.button};
  color: ${theme.settings.button};
  fill: ${theme.settings.button};
  background-color: transparent;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .5px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 3px 16px;
`

export default Button;
