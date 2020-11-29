/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import {useState} from "react";
import SortLink from "./SortLink";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import {faFire} from "@fortawesome/free-solid-svg-icons/faFire";

const SortSelect = () => {
    const theme = useTheme();
    const [selectedSort, setSelectedSort] = useState("Top");
    return (
        <div css={container(theme)}>
            <SortLink to={"Top"} icon={faFire} selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
            <SortLink to={"New"} icon={faRocket} selectedSort={selectedSort} setSelectedSort={setSelectedSort}/>
        </div>
    );
};

const container = theme => css`
  display: flex;
  align-items: center;
`

export default SortSelect;
