import React from 'react'

import classes from './NavBar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const NavBar = (props) => (
            <header className={classes.NavBar}>
                <DrawerToggle clicked={ props.drawerToggleClicked}/>
                <div className={classes.Logo}>
                    <a href='/'><Logo /></a>
                </div>
                <nav className={classes.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </header>
)

export default NavBar