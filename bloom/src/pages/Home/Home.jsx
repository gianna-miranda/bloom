import React, {useState, useEffect} from 'react'
import { link } from 'fs';

const Home = () =>{
    const [ users, setUsers ] = useState([])
    useEffect(() =>{
        fetch("/test")
            .then(res => res.json())
            .then(res => setUsers(res))
    }, {})
    return(
        <div>
            <p>If you can see our name on the bottom that you means your application is working properly</p>
            <h1>testing</h1>
            <ul>
                {users.map(user => <li>{user.name}</li>)}
            </ul>
        </div>
    )
}

export default Home