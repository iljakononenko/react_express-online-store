require('dotenv').config();
const express = require("express");
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./midlleware/ErrorHandlingMiddleware')
const path = require('path')
const bcrypt = require("bcrypt");
const {User, Cart, Brand, Type, ShopItem} = require("./models/models");
const lenovo_img = 'lenovo.jpg'
const lenovo_phone_img = 'lenovo-legion-y70.jpg'
const iphone_img = 'iphone.jpg'
const macbook_img = 'APPLE-MacBook-Air-13-01-front.jpg'

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandler)

app.get('/test', (req, res) => {
    res.send('Test passed!')
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        await initializeStartingValues();
        app.listen(PORT, () => {
            console.log(`server started on port ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}

async function initializeStartingValues() {

    const existing_user = await User.findOne({where: {id: 1}});

    console.log(existing_user)

    if (!existing_user) {
        console.log('creating data')
        const hashPassword = await bcrypt.hash("test123", 5);
        const user = await User.create({email: "test@test.com", password: hashPassword, role: "ADMIN"})
        const cart = await Cart.create({userId: user.id})

        await Brand.create({name: "Lenovo"});
        await Brand.create({name: "Apple"});
        await Type.create({name: "Laptop"});
        await Type.create({name: "Smartphone"});

        await ShopItem.create({name: "Lenovo Legion 5",price: 4999,brandId: 1 ,typeId: 1, img: lenovo_img})
        await ShopItem.create({name: "Lenovo Legion 7",price: 5699,brandId: 1 ,typeId: 1, img: lenovo_img})
        await ShopItem.create({name: "Lenovo Legion y70",price: 3499,brandId: 1 ,typeId: 2, img: lenovo_phone_img})
        await ShopItem.create({name: "Apple Iphone 14 Pro", price: 7659,brandId: 2 ,typeId: 2, img: iphone_img})
        await ShopItem.create({name: "Apple Iphone 14 Pro Max", price: 8479,brandId: 2 ,typeId: 2, img: iphone_img})
        await ShopItem.create({name: "Apple MacBook Air", price: 10479,brandId: 2 ,typeId: 1, img: iphone_img})
        await ShopItem.create({name: "Apple MacBook Pro", price: 12889,brandId: 2 ,typeId: 1, img: macbook_img})
    }
}

start();
