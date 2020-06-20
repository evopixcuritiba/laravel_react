import React, { useState, useContext } from "react"

import {LayoutContext} from '../../../context/layout'
import {AuthContext} from '../../../context/auth'

import * as Icon from 'react-feather'

import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink as NavLinkBootstrap,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap"

import { NavLink } from "react-router-dom"

export default function Topbar({ toggleSidebar }){

    let layoutContext = useContext(LayoutContext)
    let auth = useContext(AuthContext)

    const [topbarIsOpen, setTopbarOpen] = useState(false);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    return (
        <Navbar
            color="light"
            light
            className="navbar shadow-sm p-3 mb-3 bg-white rounded"
            expand="md"
        >
            <Button className={'btn-toggle-side'} onClick={toggleSidebar}>
                {layoutContext.sidebarIsOpen ? (<Icon.Sidebar />) : (<Icon.ArrowRight />)}
            </Button>
            <NavbarToggler className={'btn-toggle-side'} onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLinkBootstrap exact tag={NavLink} to={"/"} activeClassName="selected">
                            Home
                        </NavLinkBootstrap>
                    </NavItem>
                    <NavItem>
                        <NavLinkBootstrap exact tag={NavLink} to={"/page2"} activeClassName="selected">
                            Page 2
                        </NavLinkBootstrap>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            {auth.user.name} <Icon.ChevronDown size={16} />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={() => auth.logout()}>
                                Sair
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
