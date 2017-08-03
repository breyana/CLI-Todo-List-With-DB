const { Client } = require('pg')
const client = new Client({
  database: 'todolist'
})

client.connect()

const addToDatabase = (task) => {
  client.query('INSERT INTO todolist (task) VALUES ($1) RETURNING id', [task])
    .then(response => {
      console.log(`Created task ${response.rows[0].id}`)
      client.end()
    })
    .catch(err => console.error(err))
}

const listAllFromDB = () => {
  client.query('SELECT * FROM todolist')
    .then(result => {
      const widestIDString = Math.max.apply(null, result.rows.map(task => task.id.toString().length))

      if (widestIDString <= 0) {
        console.log("There are no tasks.")
        return
      }

      console.log("ID" + " ".repeat(widestIDString) + "Description")
      console.log("-".repeat(widestIDString + 1) + " " + "-".repeat(11))
      result.rows.forEach((task) => {
        console.log(task.id + " ".repeat(widestIDString + 2 - task.id.toString().length) + task.task)
      })

      client.end()
    })
}

module.exports = {
  addToDatabase,
  listAllFromDB
 }
