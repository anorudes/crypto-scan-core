// @flow
import rssParser from 'rss-parser';
import { removeHtmlTags } from './utils/html';

const REDDIT_RSS_URL = 'https://www.reddit.com/r/%SLUG%.rss';
const TWITTER_RSS_URL = 'https://twitrss.me/twitter_user_to_rss/?user=%SLUG%';

class CryptoScanParser {
  config: Object;

  constructor(config: Object) {
    this.config = config;
  }

  async parseTwitterFeed() {
    // Parse all feed url
    return new Promise((resolve: Function, reject: Function) => {
      const list: Array<Object> = this.config.list;

      list.map((tokenData: Object) => {
        const feed: Object = tokenData.feed || {};

        if (feed.twitter && feed.twitter.length) {
          // Parse twitter rss
          // TODO: replace with twitter api

          const entries = [];
          feed.twitter.map((item: Object) => {
            const url: string = TWITTER_RSS_URL.replace('%SLUG%', item.slug);
            const filterBy: Object = item.filterBy;

            rssParser.parseURL(url, (err, parsed) => {
              parsed.feed.entries.map(entry => {
                entries.push({
                  title: entry.title,
                  url: entry.link,
                  date: entry.pubDate,
                  text: removeHtmlTags(entry.content),
                });
              });

              // Filter
              resolve(this._filterEntries(entries, filterBy));
            })
          });
        } else {
          reject();
        }
      });
    });
  }

  async parseRedditFeed() {
    // Parse all feed url
    return new Promise((resolve: Function, reject: Function) => {
      const list: Array<Object> = this.config.list;

      list.map((tokenData: Object) => {
        const feed: Object = tokenData.feed || {};

        if (feed.reddit && feed.reddit.length) {
          // Parse reddit rss
          // TODO: replace with twitter api

          const entries = [];
          feed.reddit.map((item: Object) => {
            const url: string = REDDIT_RSS_URL.replace('%SLUG%', item.slug);
            const filterBy: Object = item.filterBy;

            rssParser.parseURL(url, (err, parsed) => {
              parsed.feed.entries.map(entry => {
                entries.push({
                  title: entry.title,
                  url: entry.link,
                  date: entry.pubDate,
                  author: entry.author,
                  text: removeHtmlTags(entry.content),
                });
              });

              // Filter
              resolve(this._filterEntries(entries, filterBy));
            })
          });
        } else {
          reject();
        }
      });
    });
  }

  _filterEntries(entries: Array<Object>, filterBy:Object = {}) {
    // Filter rss entries by users name, regexes and keywords
    const {
      users,
      regexes,
      keywords,
    }: {
      users: Array<string>,
      regexes: Array<string>,
      keywords: Array<string>
    } = filterBy;

    const result: Array<Object> = entries.filter(entry => {
      let filtered = true;

      // Filter by user name
      if (users && !users.includes(entry.author)) {
        filtered = false;
      }

      return filtered;
    });

    return result;
  }
}

export default CryptoScanParser;
