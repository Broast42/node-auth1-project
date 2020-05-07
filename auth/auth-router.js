const bc = require('bcryptjs')
const router = require("express").Router()
const db = require('./auth-model')

router.post("/register", async (req, res, next) => {
    try{
        const {name, password} = req.body

        const hashedPass = bc.hashSync(password, 12)

        const newUser = await db.add({name: name, password: hashedPass})

        res.status(200).json(newUser)

    }catch(err){
        next(err)
    }
})

module.exports = router