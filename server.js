const express = require('express')
const authRouter = require('./auth/auth-router')
const usersRouter = require('./users/users-router')
const session = require('express-session')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

const sessionConfig = {
    name: 'sessionId',
    secret: 'class is in session',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
}

function protected (req, res, next) {
    if (req.session.userid){
        next()
    }else{
        res.status(401).json({message: "You shall not pass"})
    }
}

server.use(session(sessionConfig))
server.use(express.json())
server.use(helmet())
server.use(cors())

//routes here
server.use("/auth", authRouter)
server.use("/api/users", protected, usersRouter)

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server