/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {
    menu,
    menu_list_heading,
    menu_list_link,
    menu_item_icon_img,
    menu_item_span
} from "../../styles/searchable_styles/lists_styles";

const ModeratingList = ({list, heading, userInput, addToRefs, setHighlight, clearHighlight}) => {
    const listFiltered = list.filter(item => item.id.toLowerCase().includes(userInput.toLowerCase()))

    if (listFiltered.length === 0) return null;
    return (
        <div css={menu}>
            <h3 css={menu_list_heading}>{heading}</h3>
            <div onMouseLeave={clearHighlight}>
                {listFiltered.map(community => {
                    return (
                        <Link
                            to={`e/${community.id}`}
                            css={menu_list_link}
                            ref={el => addToRefs(el, community)}
                            key={community.id}
                            onMouseEnter={setHighlight}
                        >
                            <img css={menu_item_icon_img} src={community.imageUrl} alt="X"/>
                            <span css={menu_item_span}>{`e/${community.id}`}</span>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};


export default ModeratingList;
