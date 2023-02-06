const {Type, Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(req, res, next) {
        try {
            const {name} = req.body;
            const type = await Type.create({name,  subdomain: req.systemSource});

            return res.json(type);
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("Error"))
        }
    }

    async edit(req, res, next) {
        try {
            const {id, name} = req.body;
            const type = await Type.update({name: name}, { where: {id}} );

            return res.json(type);
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("Error"))
        }
    }

    async remove(req, res) {
        const {id} = req.body;
        await Type.destroy({where: {id} });

        return res.send({message: "success", status: 200})
    }

    async getAll(req, res, next) {
        try {
            const types = await Type.findAll({where: {subdomain: req.systemSource}})
            return res.json(types);
        } catch (err) {
            console.log(err)
            return next(ApiError.notFound("Types for selected website not found"))
        }
    }
}

module.exports = new TypeController();
