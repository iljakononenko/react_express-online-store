const {Cart, CartItem, ShopItem, Order, OrderProduct, UserData} = require('../models/models')
const ApiError = require('../error/ApiError')

class CartController {
    async addToCart(req, res) {
        const {product_id} = req.body;

        const user_id = req.user.id;

        let cart = await Cart.findOne({ where: { userId: user_id } });

        if (cart == null) {
            cart = await Cart.create({userId: user_id});
        }

        console.log(cart)

        const cart_item = await CartItem.create({cartId: cart.id, shopItemId: product_id, quantity: 1})

        return res.json({status: 200, message: "success"});
    }

    async getCartItems(req, res, next) {
        try {
            const user_id = req.user.id;

            let cart = await Cart.findOne({ where: { userId: user_id } });

            if (!cart) {
                return next(ApiError.badRequest("Cart not found"))
            }

            let cart_items = await CartItem.findAll(
                {
                    where: {cartId: cart.id},
                    include: [{model: ShopItem, as: "shop_item" }]
                } )

            return res.json(cart_items);
        } catch (err) {
            console.log(err)
            return next(ApiError.notFound("Cart items for user not found"))
        }
    }

    async removeElement (req, res, next) {
        try {
            const user_id = req.user.id;
            const {cartElementId} = req.body;

            let cart = await Cart.findOne({ where: { userId: user_id } });

            if (!cart) {
                return next(ApiError.badRequest("Cart not found"))
            }

            await CartItem.destroy({
                where: {
                    id: cartElementId
                }
            })

            return res.json({status: 200, message: "success"});
        } catch (err) {
            console.log(err)
            return next(ApiError.notFound("Cart item for user not found"))
        }
    }

    async makeOrder (req, res, next) {
        try {
            const user_id = req.user.id;

            const {orderObject} = req.body;

            let items = orderObject.items;
            let deliveryAddressData = orderObject.deliveryAddressData;
            let billingAddressData = orderObject.billingAddressData;
            let isDeliverySameAsBillingAddress = orderObject.isDeliverySameAsBillingAddress;
            let saveDataAfterOrderFlag = orderObject.saveDataAfterOrderFlag;

            let cartId = orderObject.items[0].cartId;

            console.log(req.body)
            console.log(req.body.items)

            const new_order = await Order.create({
                userId: user_id,
                firstName: billingAddressData.firstName,
                lastName: billingAddressData.lastName,
                email: billingAddressData.email,
                phone: billingAddressData.phone,
                address: billingAddressData.address,
                country: billingAddressData.country,
                city: billingAddressData.city,
                postal: billingAddressData.postal,

                deliveryFirstName: deliveryAddressData.firstName,
                deliveryLastName: deliveryAddressData.lastName,
                deliveryEmail: deliveryAddressData.email,
                deliveryPhone: deliveryAddressData.phone,
                deliveryAddress: deliveryAddressData.address,
                deliveryCountry: deliveryAddressData.country,
                deliveryCity: deliveryAddressData.city,
                deliveryPostal: deliveryAddressData.postal,

                subdomain: req.systemSource
            })

            for (let item of items) {
                let new_order_product = await OrderProduct.create({
                    orderId: new_order.id,
                    shopItemId: item.shopItemId,
                    quantity: item.quantity
                })

            }

            await CartItem.destroy({
                where: {
                    cartId
                }
            })

            if (saveDataAfterOrderFlag) {
                const billingAddress = await UserData.findOne({where: { typeId: 1, userId: user_id }})
                const deliveryAddress = await UserData.findOne({where: { typeId: 2, userId: user_id }})
                if (!billingAddress) {

                    await UserData.create({
                        typeId: 1,
                        userId: user_id,
                        firstName: billingAddressData.firstName,
                        lastName: billingAddressData.lastName,
                        email: billingAddressData.email,
                        phone: billingAddressData.phone,
                        address: billingAddressData.address,
                        country: billingAddressData.country,
                        city: billingAddressData.city,
                        postal: billingAddressData.postal,
                    })

                }
                if (!deliveryAddress) {

                    await UserData.create({
                        typeId: 2,
                        userId: user_id,
                        firstName: deliveryAddressData.firstName,
                        lastName: deliveryAddressData.lastName,
                        email: deliveryAddressData.email,
                        phone: deliveryAddressData.phone,
                        address: deliveryAddressData.address,
                        country: deliveryAddressData.country,
                        city: deliveryAddressData.city,
                        postal: deliveryAddressData.postal,
                    })
                }
            }



            res.send({message: "success", status: 200})

        } catch (err) {
            console.log(err)
            return next(ApiError.internal("Error"))
        }
    }

}

module.exports = new CartController();
