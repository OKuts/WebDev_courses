const Sequilize = require('sequelize');

const sequelize = new Sequilize('node1', 'root', '',  {
    dialect: "mysql",
    host : "localhost"
})


const Image = require('./Image')(sequelize);

module.exports = {
    sequelize : sequelize,
    image: Image
}