const mysql = require('mysql2')
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'cristovive',
    database: 'agenda-petshop' 
})

module.exports = conexao