// This is just an example

import CryptoScanCore from '../src/';
import CONFIG from './config.json';
const cryptoScan = new CryptoScanCore(CONFIG);

const MSECONDS_IN_HOUR = 3600000;

async function start() {
  const rlcFeed: ?Object = await cryptoScan.getTokenFeed('rlc');
  console.log(rlcFeed);

  const rlcPrice: ?Object = await cryptoScan.getTokenPrice('rlc');
  console.log(rlcPrice);

  const rlcGraph: ?Array<any> = await cryptoScan.getTokenGraph('rlc', Date.now() - MSECONDS_IN_HOUR , Date.now());
  console.log(rlcGraph);

  const tokensPrice: ?Array<Object> = await cryptoScan.getTokensPrice();
  console.log(tokensPrice);
}

start();
