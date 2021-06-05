/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import Toggle from "./Toggle";
import {useRef} from "react";
import SortSelectButton from "./SortSelectButton";
import {useClickOutside} from "../../../../../../hooks/useClickOutside";
import {sorts, fetchCollectionActions} from "../../../../../../hooks/useFetchCollection/fetchCollectionReducer";
import useToggle from "../../../../../../hooks/useToggle";
const {setOptions} = fetchCollectionActions

const CommentsSortSelect = ({activeSort, setActiveSort, commentsDispatch}) => {
    const dropdownRef = useRef();
    const [active, {toggle, close}] = useToggle();

    const setSortNew = event => {
        setActiveSort("New");
        commentsDispatch({type: setOptions, payload: sorts.comments.new})
        close(event);
    }
    const setSortOld = event => {
        setActiveSort("Old");
        commentsDispatch({type: setOptions, payload: sorts.comments.old});
        close(event);
    }

    useClickOutside(dropdownRef, close, active)
    return (
        <div css={[container]} ref={dropdownRef}>
            <span css={css`margin-right: 8px`}>Sort By</span>
            <div css={css`position: relative; display: flex; align-items:center`}>
                <Toggle activeSort={activeSort} toggle={toggle}/>
                {active &&
                <div css={dropdown_container}>
                    <SortSelectButton
                        activeSort={activeSort}
                        setSort={setSortNew}
                    >
                        New
                    </SortSelectButton>
                    <SortSelectButton
                        activeSort={activeSort}
                        setSort={setSortOld}
                    >
                        Old
                    </SortSelectButton>
                </div>}
            </div>
        </div>
    );
};

const container = theme => css`
  display: flex;
  color: ${theme.color2};
  margin: 8px 20px;
  padding: 4px 0;
  border-bottom: 1px solid ${theme.border1};
  label: sort-select
`
const dropdown_container = theme => css`
  z-index: 3;
  position: absolute;
  background-color: ${theme.background2};
  min-width: 50px;
  border-radius: 4px;
  top: 28px;
  left: -4px;
`;

export default CommentsSortSelect;
