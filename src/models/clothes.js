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
    fabric: {
        type: DataTypes.FLOAT, //INT: 23; FLOAT: 23.0, perhaps STRING
        allowNull: false
    }
});

module.exports = Clothes;