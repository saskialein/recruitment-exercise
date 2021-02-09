import React from 'react'

import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Why Mevo?</NavigationItem>
        <NavigationItem link="/answers">Questions?</NavigationItem>
    </ul>
)


export default NavigationItems