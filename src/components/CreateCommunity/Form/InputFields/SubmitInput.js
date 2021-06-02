/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const SubmitInput = () => {
    return (
        <input
            css={submit_input}
            type="submit"
        />
    );
};
const submit_input = theme => css`
  display: block;
  border: 0;
  color: ${theme.color1};
  height: 40px;
  width: 100px;
  margin: 50px auto 0;
  border-radius: 4px;
  background-color: ${theme.colorBlue};
  box-shadow: 1px 1px 2px 0 ${theme.theme === 'dark' ? 'black' : 'gray'};

  &:focus {
    outline: 0;
    box-shadow: 0 0 4px ${theme.theme === 'dark' ? 'black' : 'gray'};
  }

  &:active {
    outline: 0;
    box-shadow: inset 0 0 4px #181818;
  }
`

export default SubmitInput;
