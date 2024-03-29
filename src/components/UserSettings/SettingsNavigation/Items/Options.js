/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import OptionLink from "./OptionLink";

const Options = () => {
    return (
        <div css={[container]}>
            <OptionLink to={'account'}>Account</OptionLink>
            <OptionLink to={'profile'}>Profile</OptionLink>
            <OptionLink to={'feed'}>Feed Settings</OptionLink>
        </div>
    );
};

const container = css`
  display: flex;
  flex-flow: row wrap;
  label: options-container
`
export default Options;
