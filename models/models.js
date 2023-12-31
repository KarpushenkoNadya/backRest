const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketMeal = sequelize.define('basket_meal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Meal = sequelize.define('meal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})


User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketMeal)
BasketMeal.belongsTo(Basket)

Type.hasMany(Meal)
Meal.belongsTo(Type)

Meal.hasMany(BasketMeal)
BasketMeal.belongsTo(Meal)

module.exports = {
    User,
    Basket,
    BasketMeal,
    Meal,
    Type
}
