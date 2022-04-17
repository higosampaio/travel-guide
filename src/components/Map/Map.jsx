import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

import useStyles from './styles'

const Map = () => {
    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width: 600px)')

    const coordinates = { lat: 0, lng: 0 }

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyCkTCN0y1PWGq2b-XOqI_3oPrsl-2WHTkc',
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            ></GoogleMapReact>
        </div>
    )
}

export default Map
