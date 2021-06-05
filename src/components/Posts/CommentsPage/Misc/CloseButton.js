/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {useNavigate} from "react-router";
import {MoveFocusInside} from "react-focus-lock";

const CloseButton = ({fromFeed}) => {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);
    if (!fromFeed) return null;
    return (
        <MoveFocusInside>
            <button
                css={[button]}
                onClick={handleClick}
            >
                Close
            </button>
        </MoveFocusInside>
    );
};

const button = css`
  z-index: 2;
  position: absolute;
  right: 10px;
  top: 4px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 12px;
  height: 24px;
  font-weight: 700;
  border: 0;
  label: close-button
`

export default CloseButton;
