const mongoose = require('mongoose');
const { uri } = require('../config');

module.exports = {
  connectToDb: () => {
    mongoose.connect(uri, {useNewUrlParser: true});
  }
};
