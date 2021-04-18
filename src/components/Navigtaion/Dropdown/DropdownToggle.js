/** @jsxImportSource @emotion/react */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    dropdown_toggle_button,
    dropdown_toggle_button_active,
    dropdown_toggle_icon,
    dropdown_toggle_icon_active
} from "../../../styles/dropdown_styles";

const DropdownToggle = ({icon, open, toggleDropdown}) => {
    return (
        <button
            css={[dropdown_toggle_button, open && dropdown_toggle_button_active]}
            onClick={toggleDropdown}
            tabIndex={0}
        >
            <FontAwesomeIcon
                icon={icon}
                css={[dropdown_toggle_icon, open && dropdown_toggle_icon_active]}
            />
        </button>
    )
}
export default DropdownToggle