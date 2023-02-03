const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

// 1 - billing address
// 2 - delivery address

const UserData = sequelize.define('user_data', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    typeId: {type: DataTypes.INTEGER},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    postal: {type: DataTypes.STRING},
})

const Cart = sequelize.define('cart', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER}
})

const ShopItem = sequelize.define('shop_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const ItemInfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ServiceWebSites = sequelize.define('service_web_sites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    system_id: {type: DataTypes.INTEGER},
    pages: {type: DataTypes.TEXT},
    name: {type: DataTypes.STRING},
    layout_type_id: {type: DataTypes.INTEGER}
})

const Order = sequelize.define('order', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING},
    country: {type: DataTypes.STRING},
    city: {type: DataTypes.STRING},
    postal: {type: DataTypes.STRING},

    deliveryFirstName: {type: DataTypes.STRING},
    deliveryLastName: {type: DataTypes.STRING},
    deliveryEmail: {type: DataTypes.STRING},
    deliveryPhone: {type: DataTypes.STRING},
    deliveryAddress: {type: DataTypes.STRING},
    deliveryCountry: {type: DataTypes.STRING},
    deliveryCity: {type: DataTypes.STRING},
    deliveryPostal: {type: DataTypes.STRING},

    status: {type: DataTypes.INTEGER, defaultValue: 1}
})

const OrderProduct = sequelize.define('order_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER},
})

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(UserData)
UserData.belongsTo(User)

User.hasMany(Order)
Order.belongsTo(User)

Order.hasMany(OrderProduct)
OrderProduct.belongsTo(Order)

ShopItem.hasMany(OrderProduct)
OrderProduct.belongsTo(ShopItem)

User.hasMany(Rating)
Rating.belongsTo(User)

Cart.hasMany(CartItem)
CartItem.belongsTo(Cart)

ShopItem.hasMany(CartItem)
CartItem.belongsTo(ShopItem)

Type.hasMany(ShopItem)
ShopItem.belongsTo(Type)

Brand.hasMany(ShopItem)
ShopItem.belongsTo(Brand)

ShopItem.hasMany(Rating)
Rating.belongsTo(ShopItem)

ShopItem.hasMany(ItemInfo, {as: "info"})
ItemInfo.belongsTo(ShopItem)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports = {
    User,
    UserData,
    Cart,
    CartItem,
    ShopItem,
    Type,
    Brand,
    Rating,
    TypeBrand,
    ItemInfo,
    ServiceWebSites,
    Order,
    OrderProduct
}
