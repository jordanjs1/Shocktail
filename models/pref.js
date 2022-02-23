module.exports = function (sequelize, DataTypes) {
    var Pref = sequelize.define("Pref", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            validate: {
                allownull: false
            }
        },
        vodka: {
            type: DataTypes.BOOLEAN,
        },
        rum: {
            type: DataTypes.BOOLEAN,
        },
        tequila: {
            type: DataTypes.BOOLEAN,
        },
        gin: {
            type: DataTypes.BOOLEAN,
        },
        triple_sec: {
            type: DataTypes.BOOLEAN,
        },
        whiskey: {
            type: DataTypes.BOOLEAN,
        },
        kahlua: {
            type: DataTypes.BOOLEAN,
        },
        champagne: {
            type: DataTypes.BOOLEAN,
        },
        jagermeister: {
            type: DataTypes.BOOLEAN,
        },
        //
        orange: {
            type: DataTypes.BOOLEAN,
        },
        banana: {
            type: DataTypes.BOOLEAN,
        },
        lemon: {
            type: DataTypes.BOOLEAN,
        },
        pineapple: {
            type: DataTypes.BOOLEAN,
        },
        lime: {
            type: DataTypes.BOOLEAN,
        },
        strawberries: {
            type: DataTypes.BOOLEAN,
        },
        //
        
        cream: {
            type: DataTypes.BOOLEAN,
        },
        orange_juice: {
            type: DataTypes.BOOLEAN,
        },
        milk: {
            type: DataTypes.BOOLEAN,
        },
        cranberry_juice: {
            type: DataTypes.BOOLEAN,
        },
        soda_water: {
            type: DataTypes.BOOLEAN,
        },
        coffee: {
            type: DataTypes.BOOLEAN,
        },
        coca_cola: {
            type: DataTypes.BOOLEAN,
        },
        sugar: {
            type: DataTypes.BOOLEAN,
        },
        grenadine: {
            type: DataTypes.BOOLEAN,
        }
    });

    Pref.associate = function (models) {
        Pref.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                references: { model: "users", key: "userId" } 
            }
        });
    };

    return Pref;
}