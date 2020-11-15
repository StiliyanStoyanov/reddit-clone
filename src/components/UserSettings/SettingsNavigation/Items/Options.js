/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import SettingOptionLink from "./SettingOptionLink";
import {useState} from "react";

const Options = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const selectOption = option => setSelectedOption(option);

    return (
        <div css={container}>
            <SettingOptionLink option={'account'} selectedOption={selectedOption} selectOption={selectOption}>Account</SettingOptionLink>
            <SettingOptionLink option={'profile'} selectedOption={selectedOption} selectOption={selectOption}>Profile</SettingOptionLink>
            <SettingOptionLink option={'notifications'} selectedOption={selectedOption} selectOption={selectOption}>Notifications</SettingOptionLink>
            <SettingOptionLink option={'privacy'} selectedOption={selectedOption} selectOption={selectOption}>Safety & Privacy</SettingOptionLink>
        </div>
    );
};

const container = css`
  display: flex;
  flex-flow: row wrap;
`
export default Options;
