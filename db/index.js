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

const removeFromDB = (id) => {
  client.query('DELETE FROM todolist WHERE id=$1', [id])
    .then(response => {
      if (response.rowCount === 0) {
        console.log(`ID ${id} was not found.`)
      } else {
        console.log(`ID ${id} has been completed`)
      }
      client.end()
    })
    .catch(err => {
      console.error(err)
    })
}

module.exports = {
  addToDatabase,
  listAllFromDB,
  removeFromDB
 }
