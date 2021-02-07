import React from 'react'

import classes from './Logo.module.css'

const mevoLogo = 'https://assets.mevo.co.nz/brand/logo-light.svg'

const Logo = (props) => (
        <div className={classes.Logo}>
            <img src={mevoLogo} alt='Mevo'/>
        </div>
    )


export default Logo