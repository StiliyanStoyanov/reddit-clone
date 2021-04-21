/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import SortButton from "./SortButton";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import {faFire} from "@fortawesome/free-solid-svg-icons/faFire";

const SortSelect = ({sort, setSort}) => {
    return (
        <div css={[container]}>
            <SortButton
                forSort={"top"}
                icon={faFire}
                sort={sort}
                setSort={setSort}
            />
            <SortButton
                forSort={"new"}
                icon={faRocket}
                sort={sort}
                setSort={setSort}
            />
        </div>
    );
};

const container = css`
  display: flex;
  align-items: center;
  label: sort-select
`

export default SortSelect;
