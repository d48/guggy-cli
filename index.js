var Guggy = require('@guggy/guggy-js-sdk')
var opts = {
  apiKey: process.env.GUGGY_API_KEY
}
var sentence = 'barking dogs'

Guggy.init(opts);

Guggy.createGug(sentence, function (result, err) {
  if (err) {
    console.log('there was an error', err)
  } else {
    console.log('this is the result', result)
  }
})
