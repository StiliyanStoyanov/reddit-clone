/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {useMatch} from "react-router";
import {category_link, category_link_active} from "./category_styles";
import {categoriesLookup} from "../../../utils/categories";

const CategoryLink = ({activeCategory, category, index}) => {
    const isActive = categoriesLookup[index] === activeCategory
    return (
        <Link css={[category_link, isActive && category_link_active]} to={`category/${categoriesLookup[index]}`}>
            {category}
        </Link>
    );
};


export default CategoryLink;
