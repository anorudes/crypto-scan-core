// This is just an example

import CryptoScanCore from '../src/';
import CONFIG from './config.json';

const cryptoMaker = new CryptoScanCore(CONFIG);

async function start() {
  // We set the interval parse feed in the config equal to 30 sec
  // Therefore the data of each next token will be taken after delay
  cryptoMaker.parseTokensFeed();

  // We set the interval parse coinmarket in the config equal to 10 sec
  // Therefore the data of each next token will be taken after delay
  cryptoMaker.updateTokensPrice();

  // First, there'll be many tokens with undefined data,
  // because only the first token parsed after first call
  setInterval(() => {
    console.log(cryptoMaker.getResult());
  }, 40000);
}

start();
