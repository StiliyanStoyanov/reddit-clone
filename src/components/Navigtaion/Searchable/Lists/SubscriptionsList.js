/** @jsxImportSource @emotion/react */
import {Link} from "react-router-dom";
import {
    menu,
    menu_list_heading,
    menu_list_link,
    menu_item_icon_img,
    star_icon_button,
    star_icon,
    star_icon_active, menu_item_span
} from "../../styles/searchable_styles/lists_styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {useUserStore} from "../../../../store/UserStore/UserStoreProvider";
import {firestore} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSubscriptionsDispatch, subscriptionsActions} from "../../../../store/SubscriptionsStoreProvider";
const {updateSubscription} = subscriptionsActions
const SubscriptionsList = ({list, heading, userInput, addToRefs, setHighlight, clearHighlight}) => {
    const {user} = useUserStore();
    const subscriptionsDispatch = useSubscriptionsDispatch();
    const listFiltered = list.filter(item => item.id.toLowerCase().includes(userInput.toLowerCase()))

    const handleStarButtonClick = (sub, event) => {
        event.stopPropagation();
        event.preventDefault();
        // TODO: Fix scroll bug
        subscriptionsDispatch({type: updateSubscription, payload: {id: sub.id, isFavourite: !sub.isFavourite}})
        firestore.doc(`users/${user.uid}/subscriptions/${sub.id}`).update({
            ...sub,
            isFavourite: !sub.isFavourite
        }).then(() => {
            console.log(`${sub.id} isFavourite %c${!sub.isFavourite}`, 'color: yellow')
        }).catch(err => {
            toast.error("Failed to update favourites")
            subscriptionsDispatch({type: updateSubscription, payload: sub})
            console.error(err);
        })
    };
    if (listFiltered.length === 0) return null;
    return (
        <div css={menu}>
            <h3 css={menu_list_heading}>{heading}</h3>
            <div onMouseLeave={clearHighlight}>
                {listFiltered.map(sub => {
                    return (
                        <Link
                            to={`e/${sub.id}`}
                            css={menu_list_link}
                            ref={el => addToRefs(el, sub)}
                            key={sub.id}
                            onMouseEnter={setHighlight}
                        >
                            <img css={menu_item_icon_img} src={sub.imageUrl} alt="X"/>
                            <span css={menu_item_span}>{`e/${sub.id}`}</span>
                            <button
                                css={[star_icon_button]}
                                onClick={(e) => handleStarButtonClick(sub, e)}
                            >
                                <FontAwesomeIcon
                                    css={[star_icon, sub.isFavourite && star_icon_active]}
                                    icon={faStar}
                                />
                            </button>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};


export default SubscriptionsList;
