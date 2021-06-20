export const userStoreActions = {
    changeTheme: "CHANGE_THEME",
    setUser: "SET_USER",
    setUserFirestore: "SET_USER_FIRESTORE",
    setView: "SET_VIEW",
    setSort: "SET_SORT",
    resetSortAndView: "RESET_SORT_AND_VIEW",
    logout: "LOGOUT",
}
export const changeTheme = () => ({type: userStoreActions.changeTheme})
export const setUser = (user) => ({type: userStoreActions.setUser, payload: user})
export const setUserFirestore = (firestoreUserData) => ({type: userStoreActions.setUserFirestore, payload: firestoreUserData})
export const setView = (view) => ({type: userStoreActions.setView, payload: view})
export const setSort = (sort) => ({type: userStoreActions.setSort, payload: sort})
export const resetSortAndView = () => ({type: userStoreActions.resetSortAndView,})
export const logout = () => ({type: userStoreActions.logout})
