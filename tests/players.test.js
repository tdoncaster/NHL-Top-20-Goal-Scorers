const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../models')
const {
  afterEach, before, beforeEach, describe, it
} = require('mocha')
const { topPlayers, singlePlayer } = require('./mocks/players')
// eslint-disable-next-line max-len
const { getTop20scorers, getTopScorersById, saveNewPlayer } = require('../Controllers/topscorers')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - topPlayers', () => {
  let sandbox
  let stubbedFindOne
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusSend
  let stubbedStatus

  before(() => {
    sandbox = sinon.createSandbox()
		stubbedFindAll = sandbox.stub(models.topscorers, 'findAll')
    stubbedFindOne = sandbox.stub(models.topscorers, 'findOne')
		stubbedCreate = sandbox.stub(models.topscorers, 'create')
    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  // eslint-disable-next-line no-undef
  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusSend })
  })


  afterEach(() => {
    sandbox.reset()
  })

  describe('getTop20scorers', () => {
    it('retrieves a list of players from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(topPlayers)

      await getTop20scorers({}, response)

      // expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(topPlayers)
    })
  })

  describe('getTopScorersById', () => {
    // eslint-disable-next-line max-len
    it('retrieves the players associated with the provided id from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singlePlayer)
      const request = { params: { id: '5' } }

      await getTopScorersById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '5' } })
      expect(stubbedSend).to.have.been.calledWith(singlePlayer)
    })
    it('returns a 404 when no player is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { id: 'not-found' } }

      await getTopScorersById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'not-found' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 with an error message when the database call throws an error', async () => {
      stubbedFindOne.throws('ERROR!')
      const request = { params: { id: 'throw-error' } }

      await getTopScorersById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: 'throw-error' } })
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusSend).to.have.been.calledWith('Unable to retrieve player, please try again')
    })
  })

  describe('saveNewPlayer', () => {
  // eslint-disable-next-line max-len
    it('accepts new Player details and saves them as a new player, returning the saved record with a 201 status', async () => {
      const request = { body: singlePlayer }
      // eslint-disable-next-line no-undef
      stubbedCreate.returns(singlePlayer)

      // eslint-disable-next-line no-undef
      await saveNewPlayer(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singlePlayer)
      // eslint-disable-next-line no-undef
      expect(stubbedStatus).to.have.been.calledWith(201)
      // eslint-disable-next-line no-undef
      expect(stubbedStatusSend).to.have.been.calledWith(singlePlayer)
    })
  })
})