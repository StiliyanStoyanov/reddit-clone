/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import CategoryLink from "./CategoryLink";
import {Link} from "react-router-dom";
import {useMatch} from "react-router";
import {category_link, category_link_active} from "./category_styles";
import {box_shadow} from "../../../styles/general_styles";
import {categories} from "../../../utils/categories";
import {useExpandOrCollapse} from "../../../hooks/useExpandOrCollapse";

const Categories = ({activeCategory}) => {
    const categoryBase = useMatch('/leaderboards');
    const [{expanded, message, list: categoriesList}, {expand, collapse}] = useExpandOrCollapse(categories, 15);

    const handleButtonClick = () => expanded ? collapse() : expand();
    return (
        <div css={[categories_container]}>
            <h2 css={heading}>Categories</h2>
            <Link css={[category_link, categoryBase && category_link_active]} to={"/leaderboards"}>All Communities</Link>
            {categoriesList.map((category, index) => {
                return <CategoryLink key={category} activeCategory={activeCategory} category={category} index={index}/>
            })}
            <button onClick={handleButtonClick}>{message}</button>
        </div>

    );
};
const heading = theme => css`
  padding: 6px;
  margin: 0;
  flex-basis: 100%;
  border-bottom: 1px solid ${theme.border1};
  background-color: ${theme.backgroundLoader};
`
const categories_container = theme => css`
  ${box_shadow(theme)};
  background-color: ${theme.background1};
  overflow: hidden;
  display: flex;
  flex-flow: column;
  font-size: 12px;
  border-radius: 4px;
  @media (max-width: 800px) {
    flex-flow: row wrap;
    margin: 8px 0;
  }
`

export default Categories;
