const Sequelize = require('sequelize')
const topscorersModel = require('./topscorers')

const connection = new Sequelize('nhltop20','topnhl', 'nhltop1', {
    host: 'localhost', dialect: 'mysql'
})

const topscorers = topscorersModel(connection, Sequelize)

// topscorers.hasMany(position)


module.exports = { topscorers }