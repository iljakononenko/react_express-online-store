const {ShopItem, ItemInfo, Brand} = require('../models/models')
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

            const shopItem = await ShopItem.create({name, price, brandId, typeId, img: fileName, subdomain: req.systemSource})

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
                items = await ShopItem.findAndCountAll({where: {subdomain: req.systemSource}, limit: limit, offset: offset});
            }
            if (brandId && !typeId) {
                items = await ShopItem.findAndCountAll({where: {brandId, subdomain: req.systemSource}, limit, offset});
            }
            if (!brandId && typeId) {
                items = await ShopItem.findAndCountAll({where: {typeId, subdomain: req.systemSource}, limit, offset});
            }
            if (brandId && typeId) {
                items = await ShopItem.findAndCountAll({where: {typeId, brandId, subdomain: req.systemSource}, limit, offset});
            }
            return res.json(items)
        } catch (err) {
            console.log(err)
        }
    }

    async getAllItems(req, res) {
        try {
            const items = await ShopItem.findAll({where: {subdomain: req.systemSource}});
            return res.json(items)
        } catch (err) {
            console.log(err)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const item = await ShopItem.findOne(
                {
                    where: {id, subdomain: req.systemSource},
                    include: [{model: ItemInfo, as: "info" }]
                },
            )
            return res.json(item)
        } catch (err) {
            console.log(err)
        }
    }

    async edit(req, res, next) {
        try{
            let itemObject = {}

            if (req.files != null && req.files.length !== 0 && req.files.img != null) {
                let fileName = uuid.v4() + ".jpg";

                itemObject.img = fileName;

                await req.files.img.mv(path.resolve(__dirname, "..", "static", fileName))
            }

            if (req.body.name) { itemObject.name = req.body.name }
            if (req.body.price) { itemObject.price = req.body.price }
            if (req.body.brandId) { itemObject.brandId = req.body.brandId }
            if (req.body.typeId) { itemObject.typeId = req.body.typeId }

            const id = req.body.id

            const item = await ShopItem.update(itemObject, {where: {id} });

            return res.json(item);
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest(err.message))
        }
    }

    async remove(req, res) {
        const {id} = req.body;
        await ShopItem.destroy({where: {id} });

        return res.send({message: "success", status: 200})
    }
}

module.exports = new ItemController();
