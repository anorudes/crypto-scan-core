// @flow
import axios from 'axios';
import CryptoScanParser from './parser';
import {
  REDDIT_RSS_URL,
  COINMARKET_ENDPOINT,
  TWITTER_RSS_URL
} from './constants';

class CryptoScanCore extends CryptoScanParser {
  config: Object;
  tokens: Object;
  feedByToken: Object;
  priceByToken: Object;

  constructor(config: Object) {
    super(config);
    this.config = config;
    this.feedByToken = {};
    this.priceByToken = {};
  }

  async parseFeed() {
    const list: Array<Object> = this.config.list;
    const parseInterval: number = this.config.interval.feed;

    list.map(async (tokenData: Object, index: number) => {
      const feed: Object = tokenData.feed || {};
      const tokenName: string = tokenData.tokenName;

      setTimeout(async () => {
        const redditFeed = await this.parseRSSFeed(feed.reddit, REDDIT_RSS_URL)
        const twitterFeed = await this.parseRSSFeed(feed.twitter, TWITTER_RSS_URL);

        this.feedByToken[tokenName] = {
          twitter: twitterFeed,
          reddit: redditFeed,
          lastUpdate: new Date(Date.now()),
        };
      }, parseInterval * index);
    });
  }

  async updateTokensPrice() {
    // Get all price of tokens from coinmarket

    const list: Array<Object> = this.config.list;
    const parseInterval: number = this.config.interval.coinmarket;

    list.map(async (tokenData: Object, index: number) => {
      const tokenName: string = tokenData.coinmarketSlug;
      const coinmarketSlug: string = tokenData.coinmarketSlug;
      
      setTimeout(async () => {
        const coinmarketData = await axios.get(COINMARKET_ENDPOINT + coinmarketSlug);

        if (coinmarketData.data && coinmarketData.data[0]) {
          // We save last result for magic calc
          if (!this.priceByToken[tokenName]) {
            this.priceByToken[tokenName] = [];
          }

          this.priceByToken[tokenName].push({
            ...coinmarketData.data[0],
            date: new Date(Date.now()),
          });
        }
      }, parseInterval * index);
    });
  }

  getResult(): Array<Object> {
    // Return result of magic
    const list: Array<Object> = this.config.list;
    const result = [];

    // Prepare result array
    list.map(tokenData => {
      const {
        tokenName,
        name,
        coinmarketSlug,
      }: {
        tokenName: string,
        name: string,
        coinmarketSlug: string
      } = tokenData;

      result.push({
        tokenName,
        name,
        coinmarketSlug,
        feed: this.feedByToken[tokenName],
        price: this.priceByToken[tokenName],
      });
    });

    return result;
  }

}

export default CryptoScanCore;
