const redux = require('redux');
const userInfo = require('./reducer/user')

const reducer = redux.combineReducers({
    userInfo
})
const store = redux.createStore(reducer)


export default store;