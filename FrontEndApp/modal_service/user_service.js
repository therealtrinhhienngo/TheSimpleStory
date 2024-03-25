const { Routes } = require("../config/routes_config");

// Login function
const loginFunction = (navigation, username, password) => {
    console.log(username + ' ' + password);
    if(username != '' && password != ''){
        navigation.navigate(Routes.HomeScreen);
    }
}

// Register function
const registerFunction = () => {

}

module.exports = {loginFunction, registerFunction}
