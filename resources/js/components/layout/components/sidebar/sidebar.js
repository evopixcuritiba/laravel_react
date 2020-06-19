import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faBriefcase,
    faPaperPlane,
    faQuestion,
    faImage,
    faCopy,
} from "@fortawesome/free-solid-svg-icons"

import {
    NavItem,
    NavLink,
    Nav
} from "reactstrap"

import classNames from "classnames"
import { Link } from "react-router-dom"

import SubMenu from "./submenu"

import Logo from '../../../../src/assets/images/logo.png'

const submenus = [
    [
        {
            title: "Home 1",
            target: "Home-1",
        },
        {
            title: "Home 2",
            target: "Home-2",
        },
        {
            title: "Home 3",
            target: "Home-3",
        },
    ],
    [
        {
            title: "Page 1",
            target: "Page-1",
        },
        {
            title: "Page 2",
            target: "Page-2",
        },
    ],
];

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
                    <SubMenu title="Home" icon={faHome} items={submenus[0]} />
                    <NavItem>
                        <NavLink tag={Link} to={"/about"}>
                            <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                            Sobre
                        </NavLink>
                    </NavItem>
                    <SubMenu title="Páginas" icon={faCopy} items={submenus[1]} />
                    <NavItem>
                        <NavLink tag={Link} to={"/pages"}>
                            <FontAwesomeIcon icon={faImage} className="mr-2" />
                            Portfolio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/faq"}>
                            <FontAwesomeIcon icon={faQuestion} className="mr-2" />
                            FAQ
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to={"/contact"}>
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                            Contato
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    )
}
