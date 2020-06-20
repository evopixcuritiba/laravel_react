import React, {useState} from 'react'

import Topbar from './components/header/topbar'
import Sidebar from './components/sidebar/sidebar'

import {LayoutContext} from '../context/layout'

import classNames from "classnames"
import { Container } from "reactstrap"

export default function DefaultLayout({ children }){
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
    return (
        <LayoutContext.Provider value={{
            sidebarIsOpen
        }}>
            <div className="App wrapper">
                <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                <Container
                    fluid
                    className={classNames("content", { "is-open": sidebarIsOpen })}
                >
                    <Topbar toggleSidebar={toggleSidebar} />
                    {children}
                </Container>
            </div>
        </LayoutContext.Provider>
    )
}
