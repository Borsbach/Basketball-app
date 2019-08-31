const express = require('express')
const bodyParser = require('body-parser')
const membersRouter = require('./routers/members')
const authRouter = require('./routers/auth');
const { logger } = require('./middleware')

const app = express()
const port = process.env.PORT || 4001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/members', membersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  res.send('Welcome to my Basketball-app server!')
})

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))