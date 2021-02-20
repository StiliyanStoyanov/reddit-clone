/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {useTheme} from "emotion-theming";
import SortLink from "./SortLink";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import {faFire} from "@fortawesome/free-solid-svg-icons/faFire";

const SortSelect = ({sort, setSort}) => {
    const theme = useTheme();
    return (
        <div css={container(theme)}>
            <SortLink
                to={"top"}
                icon={faFire}
                sort={sort}
                setSort={setSort}
            />
            <SortLink
                to={"new"}
                icon={faRocket}
                sort={sort}
                setSort={setSort}
            />
        </div>
    );
};

const container = theme => css`
  display: flex;
  align-items: center;
`

export default SortSelect;
