'use strict';

require('dotenv').config();
const { sequelize } = require('./src/models');
const server = require('./src/server.js');
const PORT = process.env.PORT || 3001;
// could instantiate new Sequelize
// import env variable for db connection

sequelize.sync()
  .then(() => {
    server.start(PORT);
  });

  //Code template used from demo code in class repo