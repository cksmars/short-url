const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const URL = require('./models/url')
const shortenUrl = require('./shortenUrl')

const app = express()

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const originalUrl = req.body.original_url
  const shortUrl = shortenUrl(5)
  console.log(`original ${originalUrl}, short ${shortUrl}`)
  return URL.create({ original_url: originalUrl, short_url: shortUrl })
    .then(() => res.render('result', { shortUrl }))
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})