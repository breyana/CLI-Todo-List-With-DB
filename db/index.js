const { Client } = require('pg')
const client = new Client({
  database: 'todolist'
})

client.connect()

const addToDatabase = (task) => {
  client.query('INSERT INTO todolist (task) VALUES ($1) RETURNING id', [task])
    .then(res => {
      console.log(`Created task ${res.rows[0].id}`)
      client.end()
    })
    .catch(err => console.error(err))
}

module.exports = { addToDatabase }
