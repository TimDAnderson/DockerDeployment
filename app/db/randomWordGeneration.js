var Promise = require('bluebird');
const LoremIpsum = Promise.promisifyAll(require('lorem-ipsum').LoremIpsum);

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

module.exports.lorem = lorem;