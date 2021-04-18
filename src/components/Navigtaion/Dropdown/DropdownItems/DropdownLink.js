/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {dropdown_item} from "../../../../styles/dropdown_styles";
import {useDropdownMethods} from "../Dropdown";

const DropdownLink = ({to, children}) => {
    const {closeDropdown} = useDropdownMethods();
    return (
        <Link
            css={[dropdown_item]}
            onClick={closeDropdown}
            to={to}
        >
            {children}
        </Link>
    );
};

export default DropdownLink;
