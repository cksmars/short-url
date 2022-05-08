function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function shortenUrl(num) {
  const base_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  let collection = []
  collection = collection.concat(...base_characters)

  let result = ''
  for (let i = 1; i <= num; i++) {
    result += sample(collection)
  }

  return result
}

module.exports = shortenUrl