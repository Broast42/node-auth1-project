import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Register = (props) => {
    const [creds, setCreds] = useState({})

    const changeHandle = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const register = (user) => {
        axios
            .post(`http://localhost:7000/auth/register`, user)
            .then(res => {
                console.log(res)
                props.history.push("/")
            })
            .catch(err => {
                console.log(err)
            })
    } 

    console.log(creds)
    return(
        <div>
            <form onSubmit={(e) =>{ e.preventDefault(); register(creds)}}>
                <h3>Register</h3>
                <input type="text" name="name" placeholder="Username" onChange={(e) => changeHandle(e)}/>
                <input type="password" name="password" placeholder="Password" onChange={(e) => changeHandle(e)}/>
                <button type="submit">Register</button>
                <p>Back to <Link to="/">Log In</Link></p>
            </form>
        </div>
    )
}

export default Register