import React, { createContext, useState } from 'react'

import {toast} from "react-toastify"

import api from '../../src/services/api'

export const AuthContext = createContext({})

export default function AuthContextProvider({children}){

    const [user, setUser] = useState(userDataFromHome)
    const [isLoggin, setIsLoggin] = useState(false)

    async function login(data){
        setIsLoggin(true)
        await api.post('/auth', data).then(response => {
            window.location.reload()
        }).catch(error => {
            toast.error(`Atenção: ${error.response.data}`)
            setIsLoggin(false)
        })
    }

    async function update(data){
    }

    async function logout(){
        await api.post('/auth/logout')
            .then(() => {
                window.location.reload()
            }).catch(() => {
                toast.error('Erro ao efetuar logout')
            })
    }

    let obj = {
        user,
        isLoggin,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    )
}
