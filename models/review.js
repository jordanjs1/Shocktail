module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        review: {
            type: DataTypes.TEXT,
            validate: {
                allowNull: false,
                notEmpty: true,
                len: [1, 150]
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }
    });

    Review.associate = function(models) {
        Review.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Review.belongsTo(models.Cocktail, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Review;
};