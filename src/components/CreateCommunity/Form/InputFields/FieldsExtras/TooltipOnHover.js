/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

const TooltipOnHover = ({message}) => {
    return (
        <div css={hoverContainer}>
            <span>?</span>
            <div css={hoverContent}>
                {message}
            </div>
        </div>
    );
};
const hoverContainer = css`
  display: flex;
  cursor:pointer;
  color: #e4e6eb;
  justify-content: center;
  margin-left: 5px;
  font-weight: 900;
  font-size: 8px;
  width: 12px;
  height: 12px;
  background-color:  #0079d3;
  border-radius: 50%;
  &:hover {
    & div {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.5s;
    }
  }
`
const hoverContent = css`
  position: absolute;
  visibility: hidden;
  color: #e4e6eb;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  opacity: 0;
  z-index: 1;
  top: 18px;
  right: 0;
  left: 0;
  margin: 0 auto;
  width: 90%;
  padding: 10px;
  background-color:  #0079d3;
  border-radius: 4px;
  overflow-wrap: break-word;
  text-align: center;
`

export default TooltipOnHover;
