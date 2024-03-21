const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'abc12345',
    database: 'mysimplestory_database'
});

const connectDatabaseFunction = () => {
    mysqlConnection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
};

module.exports = {connectDatabaseFunction, mysqlConnection}