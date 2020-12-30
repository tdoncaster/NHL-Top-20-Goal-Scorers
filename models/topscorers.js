const  topscorers  = (connection, Sequelize) => {


    return connection.define('topscorers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: Sequelize.STRING },
      position: { type: Sequelize.STRING },
      gamesplayed: { type: Sequelize.INTEGER },
      goals: { type: Sequelize.INTEGER},


    }, { paranoid: true })
  }
  
  module.exports = topscorers