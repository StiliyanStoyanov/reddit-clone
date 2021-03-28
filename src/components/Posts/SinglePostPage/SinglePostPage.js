/** @jsxImportSource @emotion/react */
import {css, useTheme} from "@emotion/react";
import {useEffect} from "react";
import MainAsideWrapper from "./MainAsideWrapper";
import ReactFocusLock from "react-focus-lock";

const SinglePostPage = () => {
    const theme = useTheme();
    useEffect(() => {
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden"
        return () => {
            body.style.overflow = "";
        }
    }, []);

    return (
        <ReactFocusLock returnFocus={true}>
            <div css={[pageContainer(theme)]}>
                <div css={[itemsContainer(theme)]}>
                    <MainAsideWrapper/>
                </div>
            </div>
        </ReactFocusLock>
    );
};

const pageContainer = theme => css`
  position: fixed;
  top: 71px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  height: calc(100% - 71px);
  z-index: 3;
  background-color: ${theme.backgroundColor};
  label: page-container;
`

const itemsContainer = theme => css`
  position: relative;
  min-width: 380px;
  max-width: 1220px;
  margin: 0 auto;
  label: items-container;
`

export default SinglePostPage;
