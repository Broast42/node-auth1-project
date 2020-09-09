import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Users from './Users';


const Login = (props) => {
    const [creds, setCreds] = useState({})
    const [toggle, setToggle] = useState(false)

    const changeHandle = (e) => {
        setCreds({
            ...creds,
            [e.target.name]: e.target.value
        })
    }

    const logIn = (user) =>{
        axios
            .post(`http://localhost:7000/auth/login`, user)
            .then(res => {
                console.log(res)
                setToggle(!toggle)
                //props.history.push("/users")
            })
            .catch(err => {
                console.log(err)
            })
    }

    console.log(creds)
    
    return(
        <div>
            <form onSubmit={(e) => {e.preventDefault(); logIn(creds)} }>
                <h3>Log In</h3>
                <input type="text" name="name" placeholder="Username" onChange={(e) => changeHandle(e)}/>
                <input type="password" name="password" placeholder="Password" onChange={(e) => changeHandle(e)}/>
                <button type="submit">Log In</button>
                <p>Don't have an account? click <Link to="/register">here</Link></p>
            </form>
            <Users toggle={toggle}/>
        </div>
    )
}

export default Login