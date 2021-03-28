/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Main from "./Main/Main";
import Aside from "./Aside/Aside";
import CloseButton from "./Misc/CloseButton";
import {useLocation} from "react-router";

const MainAsideWrapper = () => {
    const {state} = useLocation();
    return (
        <div css={[container]}>
            {state && <CloseButton/>}
            <Main/>
            <Aside/>
        </div>
    );
};

const container = css`
  display: flex;
  padding-top: 12px;
  justify-content: center;
  margin: 0 auto;
  label: main-aside-wrapper
`

export default MainAsideWrapper;
