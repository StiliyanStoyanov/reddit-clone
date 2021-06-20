import {authModalActions} from "./authModalActions";
const {
    openModal,
    closeModal
} = authModalActions
export const authModalReducer = (state, action) => {
    switch (action.type) {
        case openModal: {
            const activeForm = action.payload ? action.payload : "signup";
            if (activeForm === state.activeForm && state.isOpen) return state;
            return {
                isOpen: true,
                activeForm: activeForm
            };
        }
        case closeModal: return {...state, isOpen: false}
        default: {
            console.error("Invalid Auth Form Modal Reducer Case");
            return state
        }
    }
}