/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import OptionLink from "./OptionLink";
import {useState} from "react";
import {useMatch} from "@reach/router";

const Options = () => {
    const optionMatch = useMatch('/settings/:option');
    const [selectedOption, setSelectedOption] = useState(optionMatch ? optionMatch.option : 'account');
    const selectOption = option => setSelectedOption(option);
    return (
        <div css={container}>
            <OptionLink option={'account'} selectedOption={selectedOption} selectOption={selectOption}>Account</OptionLink>
            <OptionLink option={'profile'} selectedOption={selectedOption} selectOption={selectOption}>Profile</OptionLink>
            <OptionLink option={'notifications'} selectedOption={selectedOption} selectOption={selectOption}>Notifications</OptionLink>
            <OptionLink option={'privacy'} selectedOption={selectedOption} selectOption={selectOption}>Safety & Privacy</OptionLink>
        </div>
    );
};

const container = css`
  display: flex;
  flex-flow: row wrap;
`
export default Options;
