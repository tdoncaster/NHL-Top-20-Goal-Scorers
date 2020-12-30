const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
// const { } = require('./Controllers/index.js')
const { getTop20scorers, getTopScorersById, saveNewPlayer } = require('./Controllers/topscorers')

const app = express()

app.get('/topscorers', getTop20scorers )
app.get('/topscorers/:id', getTopScorersById )

app.post('/topscorers', bodyParser.json(), saveNewPlayer)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index')
})


// app.get('/top20scorers/:input', )

// app.post('/top20scorers', bodyParser.json(), )




/*app.all('*', (request, response) => {
  return response.sendStatus(404)
})
*/

app.listen(1336)
  console.log('Listening on port 1336...') // eslint-disable-line no-console
// }