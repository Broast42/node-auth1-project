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

router.post("/login", async(req, res, next) => {
    try{
        const { name, password } = req.body

        const user = await db.getUserByName(name)

        if (user && bc.compareSync(password, user.password)){
            req.session.userid = user.id
            res.json({message: 'Logged in'})
            
        }else{
            res.status(401).json({message: 'You shall not pass!'})
        }

    }catch(err){
        next(err)
    }
})

router.get("/logout", (req, res) => {
    if(req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.json({message: 'A problem occured logging out please try again.'})
            }else{
                res.json({message: 'Good Bye'})
            }
        })
    }
})

module.exports = router