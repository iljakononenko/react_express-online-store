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

    console.log("existing_user is null:")
    console.log(existing_user == null)

    if (!existing_user) {
        console.log('creating data')
        const hashPassword = await bcrypt.hash("test123", 5);
        const user = await User.create({email: "test@test.com", password: hashPassword, role: "ADMIN", subdomain: ""})
        const cart = await Cart.create({userId: user.id})
    }
}

start();
