/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import {button_secondary} from "../../styles/button_styles";
import {
    useSubscriptionsStore,
    subscriptionsActions,
    useSubscriptionsDispatch
} from "../../store/SubscriptionsStoreProvider";
import {memo} from "react";
import {useUserStore} from "../../store/UserStore/UserStoreProvider";
import firebase, {firestore} from "../../firebase";
import {toast} from "react-toastify";
import UpdateIcon from "./UpdateIcon";
import {useCommunityDispatch, communityStoreActions} from "../../store/CommunityStore/CommunityStoreProvider";
import {useAuthModalDispatch} from "../../store/AuthModal/AuthModalProvider";
import {openModal} from "../../store/AuthModal/authModalActions";
const {addSubscription, removeSubscription, setSubscriptions} = subscriptionsActions
const {setCommunity} = communityStoreActions

const CommunityBar = memo(({community}) => {
    const {user} = useUserStore();
    const {subscriptions} = useSubscriptionsStore();
    const subscriptionsDispatch = useSubscriptionsDispatch();
    const communityDispatch = useCommunityDispatch();
    const authModalDispatch = useAuthModalDispatch();
    const isSubscribed = subscriptions.some(subscription => subscription.id === community.id);
    const isAdmin = community.admin === user?.uid;
    const communityRef = firestore.doc(`communities/${community.id}`);
    const handleSubscribeButtonClick = () => {
        if (!user) return authModalDispatch(openModal());
        const batch = firestore.batch();
        const subscriptionRef = firestore.doc(`/users/${user.uid}/subscriptions/${community.id}`);
        const subscription = {id: community.id, isFavourite: false, reference: communityRef}
        const amount = isSubscribed ? -1 : 1
        const newSubscription = {...community, subscribers: community.subscribers + amount}
        communityDispatch({type: setCommunity, payload: newSubscription});
        if (isSubscribed) {
            batch.delete(subscriptionRef);
            subscriptionsDispatch({type: removeSubscription, payload: community});
        } else {
            batch.set(subscriptionRef, subscription);
            subscriptionsDispatch({
                type: addSubscription,
                payload: newSubscription
            });
        }
        batch.update(communityRef, {
            subscribers: firebase.firestore.FieldValue.increment(amount)
        });

        batch.commit().then(() => {
            const message = isSubscribed ? `unsubscribed from ${communityRef.id}` : `subscribed to ${communityRef.id}`
            toast.success(message);
        }).catch(err => {
            console.error(err);
            toast.error('Failed to update subscriptions');
            communityDispatch({type: setCommunity, payload: community});
            subscriptionsDispatch({type: setSubscriptions, payload: subscriptions});
        })
    }

    return (
        <div css={[container]}>
            <div css={icon_container}>
                <img css={img} src={community.imageUrl} alt=""/>
                {isAdmin &&
                <UpdateIcon
                    community={community}
                    isSubscribed={isSubscribed}
                />}
            </div>
            <div css={flex_container}>
                <div>
                    <h1 css={h1}>{community.name}</h1>
                    <span css={span}>{`e/${community.id}`}</span>
                </div>
                <div>
                    {user &&
                    <button
                        css={[button_secondary, button]}
                        onClick={handleSubscribeButtonClick}
                    >
                        {isSubscribed ? 'LEAVE' : 'JOIN'}
                    </button>}
                </div>
            </div>

        </div>
    );
});
const flex_container = css`display: flex`
const icon_container = css`position: relative; padding: 8px;`
const img = css`
  width: 60px;
  height: 60px;
  margin: 0 8px;
  border-radius: 50%;
`
const h1 = theme => css`
  font-size: 28px;
  word-wrap: anywhere;
  color: ${theme.color1};
  margin: 0;
`
const span = theme => css`
  display: block;
  text-align: start;
  color: ${theme.color2};
  margin-right: auto;
`
const container =  css`
  display: flex;
  align-items: center;
  padding-top: 8px;
  min-height: 100px;
  text-align: center;
  vertical-align: bottom;
  label: community-bar
`
const button = css`
  width: 100px;
  margin: 12px 16px;
`

export default CommunityBar;

