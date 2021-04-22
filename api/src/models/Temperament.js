const { DataTypes, UUID } = require('sequelize');
const Dog = require('./Dog');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('temperament', {
    // id: {
    //     type: UUID,
    //     allowNull: true,
    //     primaryKey: true,
    // },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    }
    });
};
