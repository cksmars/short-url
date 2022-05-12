const express = require('express')
const router = express.Router()

const URL = require('../../models/url')
const shortenUrl = require('../../shortenUrl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
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

router.get('/:shortUrl', (req, res) => {
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

module.exports = router