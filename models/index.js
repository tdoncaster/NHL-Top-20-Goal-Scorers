import Sequelize from 'sequelize'
import allConfigs from '../configs/sequelize'

import topscorersModel from './topscorers'

/* const connection = new Sequelize('nhltop20','topnhl', 'nhltop1', {
    host: 'localhost', dialect: 'mysql'
})
*/
const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
const {
  username, password, database, host, dialect,
} = allConfigs[environment]

const connection = new Sequelize(database, username, password, { host, dialect })

const topscorers = topscorersModel(connection, Sequelize)

module.exports = { topscorers }
