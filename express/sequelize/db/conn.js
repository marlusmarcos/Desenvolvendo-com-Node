const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})
//  try {
//     sequelize.authenticate();
//     console.log ("autenticação feita!");
    
//  } catch (error) {
//     console.log(error);
//  }

module.exports = sequelize;