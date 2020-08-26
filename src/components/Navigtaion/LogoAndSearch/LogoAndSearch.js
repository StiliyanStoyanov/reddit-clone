/** @jsx jsx */
import {css, jsx} from "@emotion/core";
import {Logo} from "./Logo";
import {Search} from "./Search";

const LogoAndSearch = () => {
    return(
        <div css={css`display: flex; align-items: center;`}>
            <Logo/>
            <Search/>
        </div>
    )
}

export default LogoAndSearch