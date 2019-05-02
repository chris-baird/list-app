// List model

module.exports = function(sequelize, DataTypes) {
  const List = sequelize.define("List", {
    store: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  List.associate = function(models) {
    List.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return List;
};
