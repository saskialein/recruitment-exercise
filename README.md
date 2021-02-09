# Mevo take-home assignment

## 1. Installation instructions
* Clone the repository with ```git clone + https link```.
* ```cd``` into the cloned repository.
* Install modules with ```npm install```.
* Run the app in development mode with ```npm start```. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 2. Technologies
* React: [Create React App](https://github.com/facebook/create-react-app) boilerplate
* Mevo APIs: [Public Endpoints](https://developer.mevo.co.nz/docs/public/introduction)
* [Mapbox API](https://docs.mapbox.com/) and [React Map GL](https://visgl.github.io/react-map-gl/)
* Styling: [CSS Modules](https://github.com/css-modules/css-modules)
* [Collapsible Section Component](https://www.npmjs.com/package/react-collapsible) on Questions-page
* Mobile-first responsive web design
* Icons: [Material-UI](https://material-ui.com/components/material-icons/)

## 3. Users Stories
- [x] As a user, I would like to be able to see all Mevo cars on a map of Wellington displayed as pins at their exact location.
- [x] As a user, I would like to be able to see the areas where parking the Mevo vehicle is permitted and I can end my trip. (so called Mevo Home Zones)
- [x] As a user, I would like to have the option to click on the Geolocation symbol to see where my current location is.
- [x] As a user, I would like to zoom in and out of the map by clicking the navigation controlls.
- [x] As a user, I would like to see all buildings in 3D when zoomed in.
- [x] As a user, I would like to be able to change the perspective view of the map.

## External APIs

| Method | Path | Description |
|---|---|---|
| GET | https://api.mevo.co.nz/public/vehicles/all | Retrieves a list of Mevo vehicle objects with their locations (latitude & longitude) and iconUrl. |
| GET | https://api.mevo.co.nz/public/home-zones/all | Retrieves a formatted Home Zones GeoJSON polygon. |

### API response bodies
https://api.mevo.co.nz/public/vehicles/all

```
[
  {
    "iconUrl": "https://assets.mevo.co.nz/vehicles/pin-vehicle-available.png",
    "position": {
      "latitude": "-41.291099",
      "longitude": "174.786042"
    }
  },
  ...
]
```

https://api.mevo.co.nz/public/home-zones/all

```
{
  "type": "geojson",
  "data": {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [[-180, 90], [-180, -90], [180, -90]],
        [[174.813131, -41.328536], [174.812305, -41.328514]]
      ]
    }
  }
}
```


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

