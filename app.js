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
  URL.findOne({ original_url: originalUrl })
    .then(result => {
      if (!result) {
        const shortUrl = shortenUrl(5)
        return URL.create({ original_url: originalUrl, short_url: shortUrl })
      } else {
        return result
      }
    })
    .then(result => res.render('result', { shortUrl: result.short_url }))
    .catch(error => console.log(error))
})

app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  URL.findOne({ short_url: shortUrl })
    .then(result => {
      if (result) {
        return res.redirect(result.original_url)
      } else {
        res.render('index')
      }
    })
})

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000')
})