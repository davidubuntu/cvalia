import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const MapBoxGLMap = ({ width, height }) => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGRpZXpyIiwiYSI6ImNtZGhuNGRyNTAzbGMycnNic2l4cjRwMTMifQ.8IzLBcEOfM2lA5iWjeFp6Q"
    createMap()
  })
  const createMap = () => {
    const zoom = 0.9
    const coordinates = [14, 40.520007]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: "map",
      style: "mapbox://styles/ddiezr/ck9ojaa353zg21ipdmolkfgg9?fresh=true",
      zoom: zoom,
      minZoom: 0,
      maxZoom: 7,
    })
    // map.scrollZoom.disable()

    map.on("load", function () {
      map.resize()
      //On map load, we want to do some stuff
      map.addLayer({
        //here we are adding a layer containing the tileset we just uploaded
        id: "countries", //this is the name of our layer, which we will need later
        source: {
          type: "vector",
          url: "mapbox://ddiezr.1w76x30d", // <--- Add the Map ID you copied here
        },
        "source-layer": "ne_10m_admin_0_countries-6zc8lv", // <--- Add the source layer name you copied here
        type: "fill",
        paint: {
          "fill-color": "#ebbea8", //this is the color you want your tileset to have (I used a nice purple color)
          // "fill-outline-color": "#F2F2F2", //this helps us distinguish individual countries a bit better by giving them an outline
        },
      })

      map.setFilter(
        "countries",
        ["in", "ADM0_A3_IS"].concat(["PHL", "THA", "IRL", "DEU"])
      ) // This line lets us filter by country codes.

      map.on("click", "countries", function (mapElement) {
        const countryCode = mapElement.features[0].properties.ADM0_A3_IS // Grab the country code from the map properties.

        fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
          .then(data => data.json()) //fetch returns an object with a .json() method, which returns a promise
          .then(country => {
            //country contains the data from the API request
            // Let's build our HTML in a template tag
            const html = ` 
        <img src='${country.flag}' /> 
        <ul>
          <li><h3>${country.name}</h3></li>
          <li><strong>Currencies:</strong> ${country.currencies
            .map(c => c.code)
            .join(", ")}</li>
          <li><strong>Capital:</strong> ${country.capital}</li>
          <li><strong>Population:</strong> ${country.population}</li>
          <li><strong>Demonym:</strong> ${country.demonym}</li>
        </ul>
      ` // Now we have a good looking popup HTML segment.
            new mapboxgl.Popup() //Create a new popup
              .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
              .setHTML(html) // Add the HTML we just made to the popup
              .addTo(map) // Add the popup to the map
          })
      })
    })
  }

  return <div id={"map"} style={{ width: width, height: height }} />
}

export default MapBoxGLMap
