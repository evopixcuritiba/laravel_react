import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import menuconfig, {subtitle} from '../../../../src/configs/side_menu'

import {
    NavItem,
    NavLink as NavLinkBootstrap,
    Nav
} from "reactstrap"

import classNames from "classnames"
import { NavLink } from "react-router-dom"

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
                    <p>{subtitle}</p>
                    {menuconfig.map((m, index) => {
                        if(m.type === "nav"){
                            return (
                                <NavItem key={index}>
                                    <NavLinkBootstrap exact tag={NavLink} to={m.route} activeClassName="selected">
                                        <FontAwesomeIcon icon={m.icon} className="mr-2" />
                                        {m.title}
                                    </NavLinkBootstrap>
                                </NavItem>
                            )
                        }else if(m.type === "collapse"){
                            return (<SubMenu key={index} title={m.title} icon={m.icon} childrens={m.children} />)
                        }
                    })}
                </Nav>
            </div>
        </div>
    )
}
