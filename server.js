import express from 'express'
import path from 'path'

const { getTop20scorers, getTopScorersById } = require('./Controllers/topscorers')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.get('/api', (request, response) => response.render('index'))

app.get('/api/topscorers', getTop20scorers)
app.get('/api/topscorers/:id', getTopScorersById)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'public', 'index.html')))

app.listen(1336)
console.log('Listening on port 1336...') // eslint-disable-line no-console
// }
