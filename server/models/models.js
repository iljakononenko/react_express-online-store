const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    subdomain: {type: DataTypes.STRING},
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
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const CartItem = sequelize.define('cart_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER},
})

const ShopItem = sequelize.define('shop_item', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    subdomain: {type: DataTypes.STRING},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    subdomain: {type: DataTypes.STRING},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    subdomain: {type: DataTypes.STRING},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const ItemInfo = sequelize.define('item_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

// 1 - simple website (single page)
// 2 - online shop

const ServiceWebSites = sequelize.define('service_web_sites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    system_id: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    subdomain: {type: DataTypes.STRING},
    layout_type_id: {type: DataTypes.INTEGER}
})

const WebPage = sequelize.define('webpage', {
    id: {type: DataTypes.STRING, primaryKey: true},
    name: {type: DataTypes.STRING},
    url: {type: DataTypes.STRING},
})

const WebPageComponent = sequelize.define('webpage_component', {
    key: {type: DataTypes.STRING, primaryKey: true},
    component_id: {type: DataTypes.INTEGER},
    component_name: {type: DataTypes.STRING},
    order: {type: DataTypes.INTEGER},
    nodes: {type: DataTypes.TEXT}
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

    status: {type: DataTypes.INTEGER, defaultValue: 1},
    subdomain: {type: DataTypes.STRING},
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

ServiceWebSites.hasMany(WebPage)
WebPage.belongsTo(ServiceWebSites)

WebPage.hasMany(WebPageComponent)
WebPageComponent.belongsTo(WebPage)

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
    WebPage,
    WebPageComponent,
    Order,
    OrderProduct
}
