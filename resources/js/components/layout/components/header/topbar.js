import React, { useState, useContext, useEffect } from "react"

import {LayoutContext} from '../../../context/layout'

import * as Icon from 'react-feather'

import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap"

import { Link } from "react-router-dom"

export default function Topbar({ toggleSidebar }){

    let layoutContext = useContext(LayoutContext)

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
                        <NavLink tag={Link} to={"/page-1"}>
                            Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/page-2"}>
                            Link
                        </NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            Config
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
