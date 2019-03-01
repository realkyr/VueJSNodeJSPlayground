const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')
const history = require('connect-history-api-fallback')
const path = require('path')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/api/status', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.use(history())

app.use('/', express.static(path.join(__dirname, 'view')))

app.listen(process.env.PORT || 8081)
