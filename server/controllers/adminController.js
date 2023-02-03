const {ServiceWebSites} = require('../models/models')
const ApiError = require('../error/ApiError')

class AdminController {

    async create(req, res) {
        const {siteName, pages, layout_type_id} = req.body;

        console.log(req.body)

        const new_site = await ServiceWebSites.create(
            {
                name: siteName,
                pages: pages,
                layout_type_id: layout_type_id,
                system_id: 1
            }
        );

        return res.send({status: 200, message: "success", editor_id: new_site.id});
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

    async getAll(req, res) {

        const websites = await ServiceWebSites.findAll()

        return res.send({status: 200, websites: websites});
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
