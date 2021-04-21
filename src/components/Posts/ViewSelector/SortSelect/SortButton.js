/** @jsxImportSource @emotion/react */
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {sort_button, sort_button_active, sort_icon} from "../view_selector_styles";

const SortButton = ({forSort, icon, sort, setSort}) => {
    const isSelected = sort === forSort;
    const handleSelect = event => {
        setSort(forSort);
    }

    return (
        <button css={[sort_button, isSelected && sort_button_active]} onClick={handleSelect}>
            <FontAwesomeIcon css={[sort_icon]} icon={icon}/>
            <span>{forSort}</span>
        </button>
    );
};

export default SortButton;
