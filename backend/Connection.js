const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'marks',
});
connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log(err,"Error connecting");
    }
});
module.exports = connection;