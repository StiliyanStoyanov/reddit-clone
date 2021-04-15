import SubscriptionsListener from "./SubscriptionListener";
import ScoresListener from "./ScoresListener";
import UserListener from "./UserListener";

const Listeners = () => {
    return (
        <>
            <UserListener/>
            <SubscriptionsListener/>
            <ScoresListener/>
        </>
    );
};

export default Listeners;
