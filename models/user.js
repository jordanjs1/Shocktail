module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false,
                // notEmpty: true,
                len: [1, 30]
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                // allowNull: false
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });
    return User;
}