const {Brand, Order, ShopItem, OrderProduct, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class OrderController {

    async getAll(req, res, next) {
        try {
            console.log(req.systemSource)
            const orders = await Order.findAll({
                where: {subdomain: req.systemSource},
                include: [
                    {
                        model: OrderProduct, as: "order_products", include: [
                            {model: ShopItem, as: "shop_item"}
                        ] },
                ]
            })

            console.log(orders)

            return res.json(orders);
        } catch (err) {
            console.log(err)
            return next(new ApiError.notFound('orders for current system not found'))
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const order = await ShopItem.findOne(
                {
                    where: {id},
                    include: [
                        {
                            model: OrderProduct, as: "order_products", include: [
                                {model: ShopItem, as: "shop_item"}
                            ] },
                    ]
                },
            )
            return res.json(order)
        } catch (err) {
            console.log(err)
        }
    }

}

module.exports = new OrderController();
