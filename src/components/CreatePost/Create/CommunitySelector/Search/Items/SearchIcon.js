/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {usePostStore} from "../../../../../../store/PostStoreProvider";
import {useCommunitySelectorStore} from "../../CommunitySelector";

const SearchIcon = () => {
    const {community} = usePostStore();
    const {open} = useCommunitySelectorStore();
    if (open) return <FontAwesomeIcon css={icon} icon={faSearch}/>;
    // if the styles are passed in an array this error occurs
    // https://github.com/EmaSuriano/gatsby-starter-mate/issues/667
    if (community) return <span css={iconMatch(community.imageUrl)}/>
    return <span css={iconNoMatch}/>;
}

const icon = css`
  font-size: 18px;
`
const iconNoMatch = css`
  width: 24px;
  height: 20px;
  border: 1px dashed cornflowerblue;
  border-radius: 50%;
`
const iconMatch = imageUrl => css`
  width: 24px;
  height: 20px;
  border-radius: 50%;
  border: 0;
  background-image: url('${imageUrl}');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 22px 20px;
`
export default SearchIcon