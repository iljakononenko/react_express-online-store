const {ServiceWebSites} = require('../models/models')
const ApiError = require('../error/ApiError')

class AdminController {

    async create(req, res) {
        const {pages} = req.body;
        console.log(pages)

        const new_site = await ServiceWebSites.create(
            {
                pages: pages,
                system_id: 1
            }
        );

        return res.send({status: 200, message: "success"});
    }

    async update(req, res, next) {
        try {
            const {id, pages} = req.body;
            console.log(req.body);
            const updated_site = await ServiceWebSites.update({ pages: pages }, {
                where: {id},
            });

            return res.send({status: 200, message: "success"});
        } catch (err) {
            console.log(err)

            return next(ApiError.notFound("Page with sent id is not found!"))
        }
    }

    async get(req, res) {
        const {id} = req.params

        const pages = await ServiceWebSites.findOne(
            {
                where: {id}
            }
        )
        return res.send(pages);
    }

}

module.exports = new AdminController();
