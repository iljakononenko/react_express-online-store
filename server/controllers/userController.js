const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Cart, UserData, Order, OrderProduct, ShopItem, ContactForm} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest("Incorrect email or password"))
        }

        const candidate = await User.findOne({where: {email, subdomain: req.systemSource}})
        if (candidate) {
            return next(ApiError.badRequest("User with given email already exists"))
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, password: hashPassword, subdomain: req.systemSource})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email, subdomain: req.systemSource}})
        if (!user) {
            return next(ApiError.badRequest("User with given email is not found"))
        }
        let comparePasswords = bcrypt.compareSync(password, user.password);
        if (!comparePasswords) {
            return next(ApiError.badRequest("Wrong password"))
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        return res.json({token})
    }

    async getUserData(req, res, next) {
        try {
            const userId = req.user.id;

            const userData = await UserData.findAll({
                where: {userId}
            })

            res.send(userData)
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("error"))
        }
    }

    async changePassword(req, res, next) {
        try {
            const userId = req.user.id;
            const {password, newPassword} = req.body

            console.log(req.body)

            const user = await User.findOne({where: {id: userId}})
            if (!user) {
                return next(ApiError.badRequest("User with given id is not found"))
            }
            let comparePasswords = bcrypt.compareSync(password, user.password);

            if (!comparePasswords) {
                return next(ApiError.badRequest("Wrong password"))
            }

            const hashPassword = await bcrypt.hash(newPassword, 5);

            await User.update({hashPassword: hashPassword}, {
                where: {id: userId}
            } )

            res.send({message: "success", status:200})
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("error"))
        }
    }

    async changeUserData(req, res, next) {
        try {
            const userId = req.user.id;

            const {userData} = req.body;

            let billingAddressData = userData.find(userDataInstance => {return userDataInstance.typeId === 1});
            let deliveryAddressData = userData.find(userDataInstance => {return userDataInstance.typeId === 2});

            const billingAddress = await UserData.findOne({where: { typeId: 1, userId: userId }})
            const deliveryAddress = await UserData.findOne({where: { typeId: 2, userId: userId }})

            if (!billingAddress) {
                await UserData.create({
                    typeId: 1,
                    userId: userId,
                    firstName: billingAddressData.firstName,
                    lastName: billingAddressData.lastName,
                    email: billingAddressData.email,
                    phone: billingAddressData.phone,
                    address: billingAddressData.address,
                    country: billingAddressData.country,
                    city: billingAddressData.city,
                    postal: billingAddressData.postal,
                })

            } else {
                await UserData.update(billingAddressData, {where: {id: billingAddressData.id} })
            }

            if (!deliveryAddress) {
                await UserData.create({
                    typeId: 2,
                    userId: userId,
                    firstName: deliveryAddressData.firstName,
                    lastName: deliveryAddressData.lastName,
                    email: deliveryAddressData.email,
                    phone: deliveryAddressData.phone,
                    address: deliveryAddressData.address,
                    country: deliveryAddressData.country,
                    city: deliveryAddressData.city,
                    postal: deliveryAddressData.postal,
                })
            } else {
                await UserData.update(deliveryAddressData, {where: {id: deliveryAddressData.id} })
            }

            res.send({message: "success", status: 200})

        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("error"))
        }
    }

    async getAllOrders(req, res) {
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

    async receiveForm(req, res, next) {

        const {name, email, message} = req.body

        await ContactForm.create({name, email, message, subdomain: req.systemSource})

        return res.json({})
    }

    async getForms(req, res, next) {

        const forms = await ContactForm.findAll({where: {subdomain: req.systemSource}})

        return res.json(forms)
    }
}

module.exports = new UserController();
