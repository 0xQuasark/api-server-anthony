'use strict';

const express = require('express');
const app = express();
const foodRouter = require('./routes/foodroute');
const clothesRouter = require('./routes/clothesroute');

app.use(express.json());
app.use('/food', foodRouter);
app.use('/clothes', clothesRouter);


module.exports = {
    start: port => {
        app.listen(port, () => {
            console.log(`Server might be running on port ${port}`);
        });
    }
};