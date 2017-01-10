# Overview

This adds guggy.com animated gif to the command line. Add your guggy.com API key to your environment and use the command with a sentence to search for.

Also conveniently copies the gif url to your clipboard.

# Installation

Assumes in a unix environment like OSX.

1. Get a guggy.com API key via their contact form
2. Clone this repo
3. `npm i && npm link`
4. export GUGGY_API_KEY=`your api key`


# Usage

```bash
$ gugcli '<sentence to search for>' | defaults to 'all your base are belong to us'
```

![gif](https://img.guggy.com/media/kRxydslQVJ/animated/0/o/guggy.gif)


```bash
$ gugcli 'wannna grab some coffee?'
```

![gif](https://img.guggy.com/media/QsMnQEgAVA/animated/0/o/guggy.gif)

# Contribute / Hack

Feel free to re-use, hack, and do whatever you want. Happy coding.

