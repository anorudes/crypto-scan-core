// @flow
import CryptoScanParser from './parser';

class CryptoScanCore extends CryptoScanParser {
  config: Object;
  tokens: Object;
  feed: Object;

  constructor(config: Object) {
    super(config);
    const list:Array<Object> = config.list;
    this.config = config;
    this.tokens = {};

    // Set blank data
    list.map(tokenData => {
      this.tokens[tokenData.tokenName] = {
        reddit: [],
      };
    });
  }

  async parseFeed() {
    const slack = [];
    const twitter = await this.parseTwitterFeed();
    const reddit = await this.parseRedditFeed();

    this.feed = {
      slack,
      twitter,
      reddit,
    }

    return this.feed;
  }

  async updateTokensPrice() {
    // Get all price of tokens from coinmarket

    const list:Array<Object> = this.config.list;

    list.map((tokenData: Object) => {
      const tokenName:string = tokenData.coinmarketcapTokenName;

      // TODO:
    });
  }

  getResult() {
    // Return result of magic
  }

}

export default CryptoScanCore;
