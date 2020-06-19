import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import menus from '../../../../src/configs/side_menu'

import {
    NavItem,
    NavLink,
    Nav
} from "reactstrap"

import classNames from "classnames"
import { Link } from "react-router-dom"

import SubMenu from "./submenu"

import Logo from '../../../../src/assets/images/logo.png'

export default function SideBar({ isOpen, toggle }){
    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
                <p id={'side-logo'}><img src={Logo} /></p>
            </div>
            <div className="side-menu">
                <Nav vertical className="list-unstyled pb-3">
                    <p>Versão 123456.carmem</p>
                    {menus.map((m, index) => {
                        if(m.type === "nav"){
                            return (
                                <NavItem key={index}>
                                    <NavLink tag={Link} to={m.route}>
                                        <FontAwesomeIcon icon={m.icon} className="mr-2" />
                                        {m.title}
                                    </NavLink>
                                </NavItem>
                            )
                        }else if(m.type === "collapse"){
                            return (<SubMenu key={index} title="Home" icon={m.icon} items={m.children} />)
                        }
                    })}
                </Nav>
            </div>
        </div>
    )
}