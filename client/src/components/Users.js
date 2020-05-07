import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Users = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:7000/api/users`)
            .then(res => {
                console.log(res)
            })
            .catch(err =>{
                console.log(err)
            })
    },[props.toggle])
    return(
        <div>
            <h3>Users</h3>
        </div>
    )
}

export default Users