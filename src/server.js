const express = require('express')
const faker = require('faker')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'fullcycle',
}

const mysql = require('mysql')

const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  const name = faker.name.findName()

  connection.query(`CREATE TABLE IF NOT EXISTS people (name varchar(255) DEFAULT NULL)`)

  connection.query(`INSERT INTO people (name) VALUES ('${name}')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${!!results.length ? results.map(el => `<li> ${el.name} </li>`).join('') : ''}
      </ul>
    `)
  })
})

app.listen(port, () => {
  console.log('Ativo na porta ', port);
})