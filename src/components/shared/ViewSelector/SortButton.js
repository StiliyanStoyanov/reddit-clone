/** @jsxImportSource @emotion/react */
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {sort_button, sort_button_active, sort_icon} from "./styles/view_selector_styles";

const SortButton = ({onClick, sort, forSort, icon}) => {
    const isSelected = sort === forSort
    return (
        <button
            css={[sort_button, isSelected && sort_button_active]}
            onClick={() => onClick(forSort)}
        >
            <FontAwesomeIcon css={[sort_icon]} icon={icon}/>
            <span>{forSort}</span>
        </button>
    );
};

export default SortButton;
