const {ShopItem, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class ItemController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";

            await img.mv(path.resolve(__dirname, "..", "static", fileName))

            const shopItem = await ShopItem.create({name, price, brandId, typeId, img: fileName})

            // if (info) {
            //     info = JSON.parse(info)
            //     info.forEach(i => {
            //         ItemInfo.create({
            //             title: i.title,
            //             description: i.description,
            //             deviceId: shopItem.id
            //         })
            //     })
            // }

            return res.json(shopItem)
        } catch (err) {
            return next(ApiError.badRequest(err.message))
        }
    }

    async getAll(req, res) {
        try {
            let {brandId, typeId, limit, page} = req.query
            page = page || 1;
            limit = limit || 9;
            let offset = page * limit - limit;
            let items;
            if (!brandId && !typeId) {
                items = await ShopItem.findAndCountAll({limit, offset});
            }
            if (brandId && !typeId) {
                items = await ShopItem.findAndCountAll({where: {brandId}, limit, offset});
            }
            if (!brandId && typeId) {
                items = await ShopItem.findAndCountAll({where: {typeId}, limit, offset});
            }
            if (brandId && typeId) {
                items = await ShopItem.findAndCountAll({where: {typeId, brandId}, limit, offset});
            }
            return res.json(items)
        } catch (err) {
            console.log(err)
        }
    }

    async getOne(req, res) {
        try {
            console.log(req.hostname)
            console.log(req.get('origin'))
            const {id} = req.params
            const item = await ShopItem.findOne(
                {
                    where: {id},
                    include: [{model: ItemInfo, as: "info" }]
                },
            )
            return res.json(item)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new ItemController();
