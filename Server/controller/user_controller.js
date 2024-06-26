const { generateRandomId } = require("../config/ID_generate_config");
const { mysqlConnection } = require("../config/MySQL_config");

// CREATE users
const createUser = async (req, res) => {
    try {
        const { username, password, email, phone_number } = req.body;
        const id = generateRandomId(8);

        if (username != '' || password != '', email != '', phone_number != null) {
            const addQuery = `INSERT INTO users (id, username, password, email, phone_number) VALUES(
                '${id}',
                '${username}', 
                '${password}',
                '${email}',
                ${phone_number})`;
            mysqlConnection.query(addQuery, function (err, result, fields) {
                if (err) throw err;
                res.status(200).send(result);
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
    try {
        const { id, username, password, email, phone_number } = req.body;

        if (username != '' || password != '', email != '', phone_number != null) {
            const addQuery = `
            UPDATE users 
            SET
                username = '${username}', 
                password = '${password}',
                email = '${email}',
                phone_number = '${phone_number}'
            WHERE id = '${id}'`;
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

// DELETE users
const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        const selectQuery = `DELETE FROM users WHERE id = '${id}';`;
        mysqlConnection.query(selectQuery, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log('Error: ' + error);
    }
}

// Login function
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const selectLoginQuery = `
            SELECT * FROM users
            WHERE username = '${username}' && password = '${password}'
        `;
        mysqlConnection.query(selectLoginQuery, function (err, result, fields) {
            if (err) throw err;
            res.status(200).send(result);
        });
    } catch (error) {
        console.log("Login Function Error: " + error);
    }
}

module.exports = { createUser, readUser, updateUser, deleteUser, loginUser }