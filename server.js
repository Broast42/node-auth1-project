const express = require('express')
const authRouter = require('./auth/auth-router')

const server = express()

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