'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/remodulex.min.js');
} else {
  module.exports = require('./dist/remodulex.js');
}