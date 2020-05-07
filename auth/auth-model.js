const db = require("../data/config")

function getUsers(){
    return db("users").select("id", "name")
}

function getUsersById(id){
    return db("users").where("id", id).first()
}

async function add(user){
    const [id] = await db("users").insert(user)

    return getUsersById(id)
}

module.exports ={
    getUsers,
    getUsersById,
    add,
}