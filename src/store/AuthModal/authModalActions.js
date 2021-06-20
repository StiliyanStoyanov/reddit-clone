export const authModalActions = {
    openModal: "OPEN_MODAL",
    closeModal: "CLOSE_MODAL",
    switchActiveForm: "SWITCH_ACTIVE_FORM"
}
export const openModal = (formToOpen = "signup") => ({
    type: authModalActions.openModal,
    payload: formToOpen
});
export const closeModal = () => ({
    type: authModalActions.closeModal
})
