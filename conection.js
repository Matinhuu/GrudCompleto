import mysql from 'mysql2/promise'


let conection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'Bella'
})


export { conection }