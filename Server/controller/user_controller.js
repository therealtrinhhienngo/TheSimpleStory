const { mysqlConnection } = require("../config/MySQL_config");

// CREATE users
const createUser = async (req, res) => {
    try {
        const { username, password, email, phoneNumber } = req.body;

        if (username != '' || password != '', email != '', phoneNumber != null) {
            const addQuery = `INSERT INTO users (id, name, role) VALUES(
                ${10},
                '${hello}', 
                ${20})`;
            mysqlConnection.query(addQuery, function (err, result, fields) {
                if (err) throw err;
                res.send(result)
                console.log('Add Complete!');
            });
        }
        else {

        }
    } catch (error) {
        console.log('Error: ' + error);
    }
}

// READ users
const readUser = async (req, res) => {
    try {
        const selectQuery = "SELECT * FROM users";
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

// UPDATE users
const updateUser = async (req, res) => {

}

// DELETE users
const deleteUser = async (req, res) => {

}

module.exports = { createUser, readUser, updateUser, deleteUser }