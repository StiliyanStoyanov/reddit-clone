/** @jsxImportSource @emotion/react */
import {view_selector_container} from "./styles/view_selector_styles";
import {animation} from "../../Loaders/styles/animation_style";
import {flex_align_center} from "../../../styles/general_styles";
import SortButton from "./SortButton";
import {faFire} from "@fortawesome/free-solid-svg-icons/faFire";
import {faRocket} from "@fortawesome/free-solid-svg-icons/faRocket";
import ViewSelect from "./ViewSelect";
import {useEffect} from "react";
import {useUserDispatch, useUserStore} from "../../../store/UserStore/UserStoreProvider";
import {setView, setSort, resetSortAndView} from "../../../store/UserStore/userStoreActions";

const ViewSelector = () => {
    const {isLoadingFirestore, sort, view} = useUserStore();
    const dispatch = useUserDispatch();

    const handleViewClick = (view) => dispatch(setView(view));
    const handleSortClick = (sort) =>  dispatch(setSort(sort));

    useEffect(() => {
        return () => {
            dispatch(resetSortAndView());
        };
    }, [dispatch]);

    if (isLoadingFirestore) return <div css={[view_selector_container, animation]}/>
    return (
        <div css={[view_selector_container]}>
            <div css={[flex_align_center]}>
                <SortButton onClick={handleSortClick} sort={sort} forSort={"top"} icon={faFire}/>
                <SortButton onClick={handleSortClick} sort={sort} forSort={"new"} icon={faRocket}/>
            </div>
            <ViewSelect view={view} handleViewClick={handleViewClick}/>
        </div>
    );
};

export default ViewSelector