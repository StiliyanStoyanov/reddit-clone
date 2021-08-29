/** @jsxImportSource @emotion/react */
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {menu, menu_item_span, menu_list_heading, menu_list_link} from "../../styles/searchable_styles/lists_styles";
import {genericLocationList} from "../genericLocationList";

const GenericList = ({heading, userInput, addToRefs, setHighlight, clearHighlight}) => {
    const genericListFiltered = genericLocationList.filter(item => item.id.toLowerCase().includes(userInput.toLowerCase()));

    if (genericListFiltered.length === 0) return null;
    return (
        <div css={[menu]}>
            <h3 css={[menu_list_heading]}>{heading}</h3>
            <div onMouseLeave={clearHighlight}>
                {genericListFiltered.map(item => {
                    return (
                        <Link
                            to={item.path}
                            css={[menu_list_link]}
                            ref={el => addToRefs(el, item)}
                            key={item.id}
                            onMouseEnter={setHighlight}
                        >
                            <FontAwesomeIcon icon={item.icon}/>
                            <span css={menu_item_span}>{item.id}</span>
                        </Link>
                    )
                })}
            </div>

        </div>
    );
};

export default GenericList;
