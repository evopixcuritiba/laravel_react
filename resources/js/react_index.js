import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import Spinner from './components/spinner'
import Router from "./Router"
import AuthContextProvider from './components/context/auth'

import "./src/styles/global.scss"

if (document.getElementById('root')) {
    ReactDOM.render(
        <Suspense fallback={<Spinner />}>
            <AuthContextProvider>
                <ToastContainer autoClose={3000} />
                <Router />
            </AuthContextProvider>
        </Suspense>,
    document.getElementById('root'));
}
