const express = require('express')
const bodyParser = require('body-parser')
const { } = require('./Controllers/index.js')
const app = express()

app.get('/top20scorers', )

app.get('/top20scorers/:input', )

app.post('/top20scorers', bodyParser.json(), )




app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})