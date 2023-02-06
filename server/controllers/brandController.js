const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req, res) {
        const {name} = req.body;
        const brand = await Brand.create({name, subdomain: req.systemSource});

        return res.json(brand);
    }

    async edit(req, res) {
        const {id, name} = req.body;
        const brand = await Brand.update({name: name}, {where: {id} });

        return res.json(brand);
    }

    async remove(req, res) {
        const {id} = req.body;
        await Brand.destroy({where: {id} });

        return res.send({message: "success", status: 200})
    }

    async getAll(req, res) {
        const brands = await Brand.findAll({where: {subdomain: req.systemSource}})
        return res.json(brands);
    }

}

module.exports = new BrandController();
