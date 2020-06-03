import React from 'react'

export default function Layout({ children }){

    return (<>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <a className="navbar-brand" href="/">Laravel react</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nome user <span className="caret"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="">
                                    Logout
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <main className="py-4">
            {children}
        </main>
    </>)

}
