import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/about" active>Why Mevo?</NavigationItem>
        <NavigationItem link="/register">Get started!</NavigationItem>
    </ul>
    )


export default NavigationItems