module.exports = function(sequelize, DataTypes) {
  let burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  });
  return burger;
};
