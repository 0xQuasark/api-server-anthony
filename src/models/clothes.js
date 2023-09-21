'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const Clothes = sequelize.define('Clothes', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Clothes;