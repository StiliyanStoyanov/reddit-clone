/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import DropdownItemIcon from "../../DropdownItems/DropdownItemIcon";
import DropdownLinkItem from "../../DropdownItems/DropdownLinkItem";

const CreateCommunityLink = (props) => {
    return (
        <DropdownLinkItem
            to={"/create-community"}
            {...props}
        >
            <DropdownItemIcon icon={faUsers}/>
            <span css={span}>Create Community</span>
        </DropdownLinkItem>
    )
}
const span = css`
  font-size: 0.9rem;
  padding: 10px 0;
`

export default CreateCommunityLink