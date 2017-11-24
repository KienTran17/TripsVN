const userInfo = (state={}, action) => {
    if (action.type === 'USER_LOGIN') {
        return action.item;
    }
    return state;
};

export default userInfo;