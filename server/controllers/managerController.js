const {ServiceWebSites} = require('../models/models')
const ApiError = require('../error/ApiError')

class managerController {

    async getSiteBySystemSource(req, res, next) {
        try {
            const systemSource = req.systemSource;

            // console.log(systemSource)

            if (systemSource == null) {
                return next(ApiError.notFound('Not found'))
            }

            const website = await ServiceWebSites.findOne(
                {
                    where: {subdomain: systemSource}
                }
            )

            // console.log(website)

            return res.send(website)
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("Error"))
        }
    }
}

module.exports = new managerController();
