/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useNavigate} from "react-router";

const CloseButton = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);
    return (
        <button
            css={[button]}
            onClick={handleClick}
        >
            Close
        </button>
    );
};

const button = css`
  position: absolute;
  right: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  height: 24px;
  font-weight: 700;
  top: 5px;
  border: 0;
  label: close-button
`

export default CloseButton;
