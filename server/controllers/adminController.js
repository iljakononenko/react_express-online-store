const {ServiceWebSites, Brand, Type, ShopItem, Order, OrderProduct, User, UserData, WebPage, WebPageComponent} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const lenovo_img = 'lenovo.jpg'
const lenovo_phone_img = 'lenovo-legion-y70.jpg'
const iphone_img = 'iphone.jpg'
const macbook_img = 'APPLE-MacBook-Air-13-01-front.jpg'

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    );
}

class AdminController {

    async isBaseInit(req, res, next) {
        const existing_system = await ServiceWebSites.findOne({where: {id: 1}});

        res.send({isInit: existing_system != null})
    }

    async initBase(req, res, next) {
        const existing_system = await ServiceWebSites.findOne({where: {id: 1}});

        if (!existing_system) {
            // console.log(this)
            await (new AdminController).createSite(req, res)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}})
        if (!user || user.role !== "ADMIN") {
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

    async createSite(req, res) {
        const {siteName, pages, layout_type_id} = req.body;
        const subdomain = siteName.toLowerCase().replaceAll(" ", "");

        // console.log(req.body)

        // return res.send({test: 'test'})

        const new_site = await ServiceWebSites.create(
            {
                name: siteName,
                subdomain: subdomain,
                layout_type_id: layout_type_id,
                system_id: 1
            }
        );

        for (let page of pages) {
            let new_page = await WebPage.create({id: page.id ,name: page.name, url: page.url, serviceWebSiteId: new_site.id})

            console.log(new_page.id)

            for (let component of page.webpage_components) {
                await WebPageComponent.create({
                    key: component.key,
                    component_id: component.component_id,
                    component_name: component.component_name,
                    order: component.order,
                    nodes: JSON.stringify(component.nodes),
                    webpageId: new_page.id
                })
            }
        }

        if (Number(layout_type_id) === 2) {
            let lenovo_brand = await Brand.create({name: "Lenovo", subdomain: subdomain});
            let apple_brand = await Brand.create({name: "Apple", subdomain: subdomain});
            let laptop_type = await Type.create({name: "Laptop", subdomain: subdomain});
            let smartphone_type = await Type.create({name: "Smartphone", subdomain: subdomain});

            await ShopItem.create({name: "Lenovo Legion 5",price: 4999,brandId: lenovo_brand.id ,typeId: laptop_type.id, img: lenovo_img, subdomain: subdomain})
            await ShopItem.create({name: "Lenovo Legion 7",price: 5699,brandId: lenovo_brand.id ,typeId: laptop_type.id, img: lenovo_img, subdomain: subdomain})
            await ShopItem.create({name: "Lenovo Legion y70",price: 3499,brandId: lenovo_brand.id ,typeId: smartphone_type.id, img: lenovo_phone_img, subdomain: subdomain})
            await ShopItem.create({name: "Apple Iphone 14 Pro", price: 7659,brandId: apple_brand.id ,typeId: smartphone_type.id, img: iphone_img, subdomain: subdomain})
            await ShopItem.create({name: "Apple Iphone 14 Pro Max", price: 8479,brandId: apple_brand.id, typeId: smartphone_type.id, img: iphone_img, subdomain: subdomain})
            await ShopItem.create({name: "Apple MacBook Air", price: 10479,brandId: apple_brand.id, typeId: laptop_type.id, img: iphone_img, subdomain: subdomain})
            await ShopItem.create({name: "Apple MacBook Pro", price: 12889,brandId: apple_brand.id, typeId: laptop_type.id, img: macbook_img, subdomain: subdomain})
        }

        let new_site_with_pages = await ServiceWebSites.findOne({
            where: {id: new_site.id},
            include: [{model: WebPage, as: "webpages", include: [{model: WebPageComponent, as: "webpage_components"}] }]
        })

        return res.send({status: 200, message: "success", editor_id: new_site.id, website: new_site_with_pages});
    }

    async updateSite(req, res, next) {
        try {
            const {pages} = req.body;

            for (let page of pages) {

                if (page.tag === "delete") {

                    await WebPage.destroy({where: {id: page.id}})

                    await WebPageComponent.destroy({where: {webpageId: page.id}})

                } else {

                    let page_found = await WebPage.findOne({where: {id: page.id}})

                    console.log(page_found)

                    // page not found, we create new
                    if (!page_found) {

                        let new_page = await WebPage.create({id: page.id ,name: page.name, url: page.url, serviceWebSiteId: page.serviceWebSiteId});

                        for (let component of page.webpage_components) {
                            await WebPageComponent.create({
                                key: component.key,
                                component_id: component.component_id,
                                component_name: component.component_name,
                                order: component.order,
                                nodes: JSON.stringify(component.nodes),
                                webpageId: new_page.id
                            })
                        }

                    } else {

                        await WebPage.update({ name: page.name, url: page.url}, {where: {id: page.id}})

                        for (let component of page.webpage_components) {

                            if (component.tag == "delete") {

                                await WebPageComponent.destroy({where: {key: component.key}})

                            } else {

                                let component_found = await WebPageComponent.findOne({where: {key: component.key}})

                                // component not found, so we create one
                                if (!component_found) {

                                    await WebPageComponent.create({
                                        key: component.key,
                                        component_id: component.component_id,
                                        component_name: component.component_name,
                                        order: component.order,
                                        nodes: JSON.stringify(component.nodes),
                                        webpageId: page_found.id
                                    })

                                } else {

                                    await WebPageComponent.update({
                                        component_id: component.component_id,
                                        component_name: component.component_name,
                                        order: component.order,
                                        nodes: JSON.stringify(component.nodes),
                                    }, {where: {key: component.key}})

                                }

                            }

                        }
                    }
                }

            }

            return res.send({status: 200, message: "success"});
        } catch (err) {
            console.log(err)

            return next(ApiError.notFound("Page with sent id is not found!"))
        }
    }

    async getAllWebsites(req, res) {
        const websites = await ServiceWebSites.findAll({
            include: [{model: WebPage, as: "webpages",
                include: [{model: WebPageComponent, as: "webpage_components"}]
            }]
        })

        return res.send({status: 200, websites: websites});
    }

    async getOneWebsite(req, res, next) {
        try {
            const {id} = req.params

            const website = await ServiceWebSites.findOne(
                {
                    where: {id},
                    include: [{model: WebPage, as: "webpages",
                        include: [{model: WebPageComponent, as: "webpage_components"}]
                    }]}
            )

            return res.send(website);
        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest('Error'))
        }
    }

    async getAllUsers(req, res, next) {
        try {
            // console.log(req.systemSource)
            const users = await User.findAll({
                where: {subdomain: req.systemSource},
                include: [
                    {
                        model: UserData, as: "user_data"
                    },
                ]
            })

            console.log(users)

            return res.json(users);
        } catch (err) {
            console.log(err)
            return next(ApiError.notFound('users for current system not found'))
        }
    }

    async getOneUser(req, res, next) {
        try {
            const {id} = req.params

            const user = await User.findOne(
                {
                    where: {subdomain: req.systemSource, id: id},
                    include: [
                        {
                            model: UserData, as: "user_data"
                        },
                    ]
                },
            )
            return res.json(user)
        } catch (err) {
            console.log(err)
            return next(ApiError.notFound('user for current system not found'))
        }
    }

    async changeUserData(req, res, next) {
        try {

            const {userData} = req.body;

            let billingAddressData = userData.find(userDataInstance => {return userDataInstance.typeId === 1});
            let deliveryAddressData = userData.find(userDataInstance => {return userDataInstance.typeId === 2});

            await UserData.update(billingAddressData, {where: {id: billingAddressData.id} })
            await UserData.update(deliveryAddressData, {where: {id: deliveryAddressData.id} })

            res.send({message: "success", status: 200})

        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("error"))
        }
    }

    async removeUser(req, res, next) {
        try {

            const {userId} = req.body;

            await User.destroy({
                where: {id: userId}
            })

            res.send({message: "success", status: 200})

        } catch (err) {
            console.log(err)
            return next(ApiError.badRequest("error"))
        }
    }


}

module.exports = new AdminController();
