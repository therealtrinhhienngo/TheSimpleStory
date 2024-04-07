const { default: axios } = require("axios");
const { ApiUsersAddress } = require("../config/api_config");
const { Routes } = require("../config/routes_config");

const axiosInstance = axios.create({
    baseURL: `${ApiUsersAddress}`,
    timeout: 5000
})

// Login function
const loginFunction = async (navigation, username, password) => {
    try {
        const res = await axiosInstance.post('/login', {
            username: username,
            password: password,
        });

        const dataArr = res.data;

        if (dataArr.length == 0) {
            console.log("Login User Failed");
        }
        else {
            console.log("Login User Complete");

            // Handle function
            navigation.navigate(Routes.HomeScreen);
        }
    } catch (error) {
        console.log("Add Users Error: " + error)
    }
}

// Register function
const registerFunction = async (navigation, username, password, email, phone_number) => {
    try {
        const res = await axiosInstance.post('/create', {
            username: username,
            password: password,
            email: email,
            phone_number: phone_number
        });

        if (res.data != null) {
            console.log("Add User Complete");
            navigation.navigate(Routes.HomeScreen);
        }
    } catch (error) {
        console.log("Add Users Error: " + error)
    }
}

module.exports = { loginFunction, registerFunction }
