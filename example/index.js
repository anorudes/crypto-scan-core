// This is just an example

import CryptoMakerCore from '../src/';
import CONFIG from './config.json';

const FEED_INTERVAL = 5 * 60000;
const COINMARKET_INTERVAL = 5 * 60000;
const PRINT_INTERVAL = 10 * 60000;

const cryptoMaker = new CryptoMakerCore(CONFIG);

async function start() {
  const feed = await cryptoMaker.parseFeed();
  console.log(feed);

  // cryptoMaker.parseFeed()
  // cryptoMaker.updateTokensPrice();
  // console.log(cryptoMaker.getResult());

  setInterval(() => {
    cryptoMaker.parseFeed();
  }, FEED_INTERVAL);

  setInterval(() => {
    cryptoMaker.updateTokensPrice();
  }, COINMARKET_INTERVAL);

  setInterval(() => {
    console.log(cryptoMaker.getResult());
  }, PRINT_INTERVAL);
}

start();
