import makeStore from "../hooks/makeStore";
export const authModalActions = {
    openModal: "OPEN_MODAL",
    closeModal: "CLOSE_MODAL",
    switchActiveForm: "SWITCH_ACTIVE_FORM"
}
const {
    openModal,
    closeModal,
    switchActiveForm
} = authModalActions

const authModalInitialState = {
    isOpen: false,
    activeForm: "signup"
}

const authModalReducer = (state, action) => {
    switch (action.type) {
        case openModal: {
            const activeForm = action?.payload?.switchToForm === "login" ? "login" : "signup"
            return {
                isOpen: true,
                activeForm: activeForm
            }
        }
        case closeModal: {
            return {
                ...state,
                isOpen: false
            }
        }
        case switchActiveForm: {
            const activeForm = action?.payload?.switchToForm === "login" ? "login" : "signup"
            return {
                ...state,
                activeForm: activeForm
            }
        }
        default: {
            console.error("Invalid Auth Form Modal Reducer Case");
            return state
        }
    }
}

const [
    AuthModalStoreProvider,
    useAuthModalStore,
    useAuthModalDispatch
] = makeStore(authModalReducer, authModalInitialState)

export {AuthModalStoreProvider, useAuthModalStore, useAuthModalDispatch}