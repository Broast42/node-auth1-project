const router = require('express').Router()
const db = require('../auth/auth-model')



router.get("/", async (req, res, next) => {
    try{
        const users = await db.getUsers()

        res.json(users)

    }catch(err){
        next(err)
    }
})

module.exports = router