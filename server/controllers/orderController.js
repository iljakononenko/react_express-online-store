const {Brand, Order, ShopItem, OrderProduct} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name});

        return res.json(brand);
    }

    async getAll(req, res) {
        const userId = req.user.id;

        const orders = await Order.findAll({
            where: {userId},
            include: [
                {
                    model: OrderProduct, as: "order_products", include: [
                        {model: ShopItem, as: "shop_item"}
                    ] },
            ]
        })

        return res.json(orders);
    }

}

module.exports = new BrandController();
