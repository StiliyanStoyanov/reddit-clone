/** @jsxImportSource @emotion/react */
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import DropdownLinkItem from "../../DropdownItems/DropdownLinkItem";
import {itemTextStyle} from "../../../../../styles/Navigation/dropdownItemsStyles";

const SettingsLink = (props) => {
    const {user} = useUserStore();
    if (user) {
        return (
            <DropdownLinkItem to={'/settings'} {...props}>
                <DropdownItemIcon icon={faCog}/>
                <span css={itemTextStyle}>Settings</span>
            </DropdownLinkItem>
        );
    } else {
        return null;
    }

}
export default SettingsLink