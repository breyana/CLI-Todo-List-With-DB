const { removeFromDB } = require('../db')

const done = (num) => {
  if (!num) {
    throw new Error('Please enter an ID number')
  }
  removeFromDB(num)
}

module.exports = done
