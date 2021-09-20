const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3003
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

mongoose.connect('mongodb://127.0.0.1:27017/scan-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => {
  console.log('Database connected');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Scan-App running on port ${ PORT }`)
})