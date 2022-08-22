const DataTypes = require('sequelize');
const db = require ('../db/conn');

const user = require ('../models/User');

const Address =  db.define ('address', {
    street :{ 
        type: DataTypes.STRING,
        require: true
    },
    number :{ 
        type: DataTypes.STRING,
        require: true
    },
    city :{ 
        type: DataTypes.STRING,
        require: true
    }
})

Address.belongsTo (user);

module.exports = Address;