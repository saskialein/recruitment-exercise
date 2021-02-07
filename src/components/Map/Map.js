import React, {Component} from 'react'
import ReactMapGL, { Marker, Source, Layer } from 'react-map-gl'
import axios from 'axios'

import classes from './Map.module.css'
import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
    state = {
        viewport: {
            latitude: -41.299382,
            longitude: 174.793737,
            width: '100vw',
            height: '60vh',
            zoom: 11.75
        },
        userLocation: {},
        loadedMap: false,
        mevoVehicleData: [],
        mevoHomeZoneData: null,
        error: false
    }

    
    requestVehicles = axios.get('https://api.mevo.co.nz/public/vehicles/all')
    requestHomeZones = axios.get('https://api.mevo.co.nz/public/home-zones/all')

    componentDidMount() {
        axios.all([this.requestVehicles, this.requestHomeZones])
            .then(axios.spread((...responses) => {
                console.log(responses[1])
                if(typeof responses[1] === 'object' && responses[1].constructor === Object){
                this.setState({
                    mevoVehicleData: responses[0].data,
                    mevoHomeZoneData: responses[1].data
                })
                } else {
                    this.setState({
                        mevoVehicleData: responses[0].data,
                        mevoHomeZoneData: JSON.parse(responses[1]).data
                    })
                }
            }))
            .catch(error => {
                this.setState({ error: true })
            })
    }

    render() {
      return (
        <div>
            <h1>The <b>coolest</b> cars <br />in the coolest little capital</h1>
            <div className={classes.Container}>
                <h3>When you need a ride in Wellington...</h3>
                <p>I'd like a safe ride to work.</p>
                <p>I have an important meeting on The Terrace.</p>
                <p>I feel like visiting Martinborough this weekend.</p>
                <p>I want to surprise my date.</p>
                <p>I have to buy groceries for a big birthday party.</p>
                <p>I always wanted to drive a German car.</p>
                <p>I missed my bus again.</p>
                <p>I haven't seen my grandparents in a while.</p>
                <p>I love Wellington, but I really need a short holiday.</p>
                <p>I have to catch a flight from Wellington Airport.</p>
                <h4>...<b>mevo</b> is there for you.</h4>
            </div>
              
                  <ReactMapGL
                  {...this.state.viewport}
                  className={classes.Map}
                      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                      mapStyle='mapbox://styles/saskialein/ckkredcas04qs17ptlqy3rl2q'
                      onViewportChange={(viewport) => {
                          this.setState({ viewport })
                          this.setState({loadedMap: true})
                      }}>
                  {this.state.mevoVehicleData.map((car, i) => {
                        //   let size = 33
                      return (
                        Object.keys(car).length !== 0 ? (
                              <Marker
                                  key={i}
                                  latitude={parseFloat(car.position.latitude)}
                                  longitude={parseFloat(car.position.longitude)}
                                  offsetTop={-45}
                                  offsetLeft={-16}>
                                      <div className={classes.Marker}></div>
                                  </Marker>) : null
                  )
                  })}
                  {this.state.mevoHomeZoneData &&
                      <Source
                          id="home-zone"
                          type="geojson"
                          data={this.state.mevoHomeZoneData.data}>
                          <Layer
                              id="home-zone-fill"
                              type='fill'
                              source="home-zone"
                              paint={{
                                  "fill-color": "#a9a9a9",
                                  "fill-opacity": 0.3,
                                  "fill-outline-color": '#f7590d'
                              }} />
                          <Layer
                              id="home-zone-line"
                              type='line'
                              source="home-zone"
                              paint={{
                                  "line-color": '#f7590d',
                                  "line-width": 2
                              }} />
                      </Source>}
                      <Layer
                          id='3d-buildings'
                          source='composite'
                          source-layer= 'building'
                          filter={['==', 'extrude', 'true']}
                          type= 'fill-extrusion'
                      minZoom={13.5}
                      maxZoom={13.8}
                          paint={{
                              "fill-extrusion-color": '#aaa',
                              "fill-extrusion-height": 
                                  [
                                    "interpolate",
                                  ["linear"],
                                  ["zoom"],
                                  13.5,
                                  0,
                                  14,
                                    ["get", "height"]
                              ],
                              "fill-extrusion-base": [
                                "interpolate",
                              ["linear"],
                              ["zoom"],
                              13.5,
                              0,
                              14,
                                ["get", "min_height"]
                          ],
                              "fill-extrusion-opacity": 0.6
                          }
                          } />
                  </ReactMapGL> 
            </div>
      )
    }
}

export default Map;