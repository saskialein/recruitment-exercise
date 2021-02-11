# Mevo exercise
**The task:** Build a static website with React that queries the Mevo APIs and displays the position of Mevo vehicles on a map. 
Be as creative as you like with your map (e.g. Mevo Home Zones, 3D buildings/maps, different perspectives, etc...).

The original: [Mevo](https://mevo.co.nz/) <br />
Saskia's version (deployed on Netlify): [Saskia's Mevo App](https://saskias-mevo-map.netlify.app/)

## 1. Installation instructions
* Clone the repository with ```git clone + repo's https link```.
* ```cd``` into the cloned repository.
* Install node modules with ```npm install```.
* Run the app in development mode with ```npm start```. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 2. Technologies
* React: [Create React App](https://github.com/facebook/create-react-app) boilerplate
* Mevo APIs: [Public Endpoints](https://developer.mevo.co.nz/docs/public/introduction)
* [Mapbox API](https://docs.mapbox.com/) and [React Map GL](https://visgl.github.io/react-map-gl/)
* Styling: [CSS Modules](https://github.com/css-modules/css-modules)
* Helpful npm packages: [axios](https://www.npmjs.com/package/axios), [React Router](https://reactrouter.com/), [Collapsible Section Component](https://www.npmjs.com/package/react-collapsible), [React Tooltip](https://www.npmjs.com/package/react-tooltip) 
* Mobile-first responsive web design
* Icons: [Material-UI](https://material-ui.com/components/material-icons/)

## 3. User Stories
- [x] As a user, I would like to be able to see all Mevo cars on a map of Wellington displayed as pins at their exact location.
- [x] As a user, I would like to be able to see the areas where parking the Mevo vehicle is permitted and I can end my trip. (so called Mevo Home Zones)
- [x] As a user, I would like to have the option to click on the Geolocation symbol to see where my current location is.
- [x] As a user, I would like to zoom in and out of the map by clicking the navigation controlls.
- [x] As a user, I would like to see all buildings in 3D when zoomed in.
- [x] As a user, I would like to be able to change the perspective view of the map.

### Stretch User Stories (to work on in the future)
- [ ] As a user, I would like to find the closest available car (inkl. distance and directions)
- [ ] As a user, I would like to be able to see the current traffic situation in Wellington.

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


## Issues faced along the way and how I solved them
* **503 Service Unavailable server error response:** Hit me on Tuesday afternoon/evening between 4:30pm and 7:00pm, just after I finished a feature and merged my feature branch into the main branch. 
Initially, I thought I broke something in my code with the merge. The error logged in the console: *this.state.mevoVehicleData.map is not a function*. After console logging the API response data, I noticed the 503 error response. Double-checking the map on [Mevo's Homepage](https://mevo.co.nz/wellington/home-zone) confirmed that the server wasn't handling the request.
* **Blank map after deployment:** After I deployed the website to Netlify, the map was displayed as a beige background container.
However, the navigation controls as well as all the Mevo vehicle pins were showing up perfectly fine. 
Turned out, mapbox-gl v2 introduced a breaking change to the build system. Transpiling the app resulted in a crash in the production build with the message *m is not defined*. To work around this error, I had to install the *worker-loader* package and add a snippet of code into my Map component as instructed by some people who ran into this issue before and shared their solution with the mapbox community. :green_heart:
* **Imposter Syndrome is real...:** The feeling that I am not good enough and other people who have applied for this job, are most likely a lot better than I am, came up a few times during this project. Whenever I noticed these thoughts coming up, I took a short break and compared myself to the person I have been a year ago. What I was able to build back then, compared to my skillset and abilities today, is huge. And with that, the speed to pick up new things has increased significantly, which I noticed while working with the Mapbox API. I am glad Enspiral Dev Academy taught us all about the Growth Mindset.
