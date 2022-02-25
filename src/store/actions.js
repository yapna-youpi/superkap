const SET_USER="SET_USER",
    UPDATE_USER="UPDATE_USER",
    REMOVE_USER="REMOVE_USER"

const setUser=data=>({
    type: SET_USER,
    data: data
})

const updateUser=data=>({
    type: UPDATE_USER,
    data: data
})

const removeUser=data=>({
    type: REMOVE_USER,
    data: data
})

export { setUser, updateUser, removeUser, SET_USER, UPDATE_USER, REMOVE_USER }