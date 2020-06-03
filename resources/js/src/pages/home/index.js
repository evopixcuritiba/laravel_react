import React, {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from "react-router-dom";

export default function Home(){

    const [user, setUser] = useState([])

    useEffect(() => {
        async function loadUser() {
            const response = await api.get('/teste')
            if(response.data){
                setUser(response.data)
            }
        }
        loadUser()
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">meu ovo // {user.name}</div>
                        <div className="card-body">
                            <Link to={'/page2'}>Ir para página 2</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
