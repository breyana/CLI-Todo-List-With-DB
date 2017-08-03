const fs = require('fs')
const readTasks = require('../readTasks.js')

const list = () => {
  readTasks((tasks) => {
    const widestIDString = Math.max.apply(null, tasks.map(task => task.id.toString().length))

    if (widestIDString <= 0) {
      console.log("There are no tasks.")
      return
    }

    console.log("ID" + " ".repeat(widestIDString) + "Description")
    console.log("-".repeat(widestIDString + 1) + " " + "-".repeat(11))
    tasks.forEach((task) => {
      console.log(task.id + " ".repeat(widestIDString + 2 - task.id.toString().length) + task.task)
    })
  })
}

module.exports = list
