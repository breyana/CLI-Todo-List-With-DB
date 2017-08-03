const fs = require('fs');
const readTasks = require('../readTasks.js')

const done = (num) => {
  readTasks((tasks) => {
    let index = tasks.findIndex((task) => {
      return task.id === +num
    })
    if (index < 0) {
      console.log('ID ' + num + ' does not exist')
    }
    tasks.splice(index, 1)
    fs.writeFile('./tasks.json', JSON.stringify(tasks), (err) => {
      if (err) throw err
    })
  })
}

module.exports = done
