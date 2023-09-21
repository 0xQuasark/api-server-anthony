'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password' {
    host: 'localhost',
    dialect: 'mysql'
});

const Food = sequelize.define('Food', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    calories: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Food;