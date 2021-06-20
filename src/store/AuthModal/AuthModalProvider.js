import makeStore from "../../hooks/makeStore";
import {authModalReducer} from "./authModalReducer";

const authModalInitialState = {
    isOpen: false,
    activeForm: "signup"
}
const [
    AuthModalStoreProvider,
    useAuthModalStore,
    useAuthModalDispatch
] = makeStore(authModalReducer, authModalInitialState)

export {AuthModalStoreProvider, useAuthModalStore, useAuthModalDispatch}