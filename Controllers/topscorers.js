const models = require('../models')


const getTop20scorers = async (request, response) => {
  const topscorers = await models.topscorers.findAll({}) 

  return response.send(topscorers)
}

const getTopScorersById = async (request, response) => {
  try {
  const {id} = request.params

  const foundPlayer = await models.topscorers.findOne({ where: { id } })
  
  return foundPlayer
    ? response.send(foundPlayer)
    : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve player, please try again')
  }
  }


const saveNewPlayer = async (request, response) => {
  const {
    name, position, gamesplayed, goals
  } = request.body

  if (!name || !position || !gamesplayed || !goals) {
    return response.status(400).send('All fields required: name, position, gamesplayed, goals')
  }

  const newPlayer = await models.topscorers.create({
    name, position, gamesplayed, goals
  })

  return response.status(201).send(newPlayer)
}



module.exports = { getTop20scorers, getTopScorersById, saveNewPlayer }