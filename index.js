#! /usr/bin/env node
const args = process.argv
const Guggy = require('@guggy/guggy-js-sdk')
require('copy-paste').global()

const opts = {
  apiKey: process.env.GUGGY_API_KEY
}

var sentence = args[2] || 'all your base are belong to us'

if (!opts.apiKey) {
  console.log('You need to specify a GUGGY_API_KEY in your enviroment. Check installation notes.')
  return;
}

Guggy.init(opts);

Guggy.createGug(sentence, function (result, err) {
  if (err) {
    console.log('there was an error', err)
  } else {
    console.log('\n ', result)

    copy(result.gif)
    console.log('\n' + result.gif, 'has been copied to your clipboard')
  }
})
