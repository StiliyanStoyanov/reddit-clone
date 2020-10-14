/** @jsx jsx */
import {css, jsx} from "@emotion/core";

const TooltipOnHover = () => {
    return (
        <div css={hoverContainer}>
            <span>?</span>
            <div css={hoverContent}>
                TESTING...TESTING...TESTING... TESTING...
            </div>
        </div>
    );
};
const hoverContainer = css`
  display: flex;
  position:relative;
  cursor:pointer;
  justify-content: center;
  margin-left: 5px;
  font-weight: 900;
  font-size: 8px;
  width: 12px;
  height: 12px;
  background-color: #2d86ff;
  border-radius: 50%;
  &:hover {
    & div {
      visibility: visible;
    }
  }
`
const hoverContent = css`
  position: absolute;
  visibility: hidden;
  font-size: 12px;
  top: 18px;
  right: 0;
  max-width: 300px;
  padding: 10px;
  background-color: darkblue;
  border-radius: 4px;
  overflow-wrap: break-word;
  text-align: center;
`

export default TooltipOnHover;
