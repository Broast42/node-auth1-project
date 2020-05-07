const express = require('express')
const authRouter = require('./auth/auth-router')
const session = require('express-session')

const server = express()

const sessionConfig = {
    name: 'twby',
    secret: 'class is in session',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
}

server.use(session(sessionConfig))
server.use(express.json())

//routes here
server.use("/auth", authRouter)

//default error
server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

module.exports = server