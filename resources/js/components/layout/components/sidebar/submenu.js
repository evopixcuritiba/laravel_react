import React, { useState, useEffect } from "react"
import classNames from "classnames"
import {
    Collapse,
    NavItem,
    NavLink as NavLinkBootstrap
} from "reactstrap"
import { NavLink, useRouteMatch } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function SubMenu(props){
    const [collapsed, setCollapsed] = useState(true);
    const toggle = () => setCollapsed(!collapsed);
    const { icon, title, childrens } = props
    let { path } = useRouteMatch()

    useEffect(() => {
        childrens.find(el => {
            if(el.route === path){
                setCollapsed(!collapsed)
            }
        })
    }, [])

    return (
        <div>
            <NavItem
                onClick={toggle}
                className={classNames({ "menu-open": !collapsed })}
            >
                <NavLinkBootstrap className="dropdown-toggle">
                    <FontAwesomeIcon icon={icon} className="mr-2" />
                    {title}
                </NavLinkBootstrap>
            </NavItem>
            <Collapse
                isOpen={!collapsed}
                navbar
                className={classNames("items-menu", { "mb-1": !collapsed })}
            >
                {childrens.map((item, index) => (
                    <NavItem key={index} className="pl-4">
                        <NavLinkBootstrap exact tag={NavLink} to={item.route} activeClassName="selected">
                            {item.title}
                        </NavLinkBootstrap>
                    </NavItem>
                ))}
            </Collapse>
        </div>
    );
}
