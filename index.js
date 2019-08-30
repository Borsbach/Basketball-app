const express = require('express')
const app = express()
const members = require('./routers/index.js')
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(members)

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))