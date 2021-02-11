import React from 'react'
import ReactTooltip from 'react-tooltip';

import classes from './Legend.module.css'

const vehicleIcon = 'https://assets.mevo.co.nz/vehicles/pin-vehicle-available.png'

const Legend = () => {
    return (
        <div className={classes.LegendContainer}>
            <ReactTooltip />
            <div className={classes.MevoVehicles}>
                <label data-tip="volkswagen polo or audi a3 e-tron">
                    <b>Mevo</b> vehicles
                </label>
                <img src={vehicleIcon} style={{ width: '19px', height: '26px' }} alt='Mevo vehicle icon' />
            </div>
            <div className={classes.HomeZones}>
                <label data-tip="Service areas where you can start and end your trips">
                    <b>Mevo</b> Home Zones
                </label>
                <div></div>
            </div>
        </div>
    )
}

export default Legend 
