const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT || 3003
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

mongoose.connect('mongodb://ikhrom:wicaksono@cluster0-shard-00-00.ynd03.mongodb.net:27017,cluster0-shard-00-01.ynd03.mongodb.net:27017,cluster0-shard-00-02.ynd03.mongodb.net:27017/LoginApi?ssl=true&replicaSet=atlas-cnzpgu-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', () => {
  console.log('Database connected');
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/',routes)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Scan-App running on port ${ PORT }`)
})