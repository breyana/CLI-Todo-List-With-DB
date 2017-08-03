const fs = require('fs')

function readTasks(callback) {
  fs.readFile('./tasks.json', 'utf8', (error, data) => {
    const tasks = JSON.parse(data)
    callback(tasks)
  })
}

module.exports = readTasks
