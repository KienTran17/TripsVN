
const axios = require('axios');
const login = (username, password) => (
    axios.post('https://tripsserver.herokuapp.com/users/login', {
        username,
        password
    }).then(res => res.data)
);
export default login;