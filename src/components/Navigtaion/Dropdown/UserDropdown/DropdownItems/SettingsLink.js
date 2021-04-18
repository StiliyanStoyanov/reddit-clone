/** @jsxImportSource @emotion/react */
import {useUserStore} from "../../../../../store/UserStoreProvider";
import DropdownIcon from "../../DropdownItems/DropdownIcon";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import DropdownLink from "../../DropdownItems/DropdownLink";
import DropdownSpan from "../../DropdownItems/DropdownSpan";

const SettingsLink = () => {
    const {user} = useUserStore();
    if (!user) {
        return null;

    }
    return (
        <DropdownLink to={'/settings/account'}>
            <DropdownIcon icon={faCog}/>
            <DropdownSpan>Settings</DropdownSpan>
        </DropdownLink>
    );

}
export default SettingsLink