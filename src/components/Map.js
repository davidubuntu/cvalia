import React, { useEffect } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

const Map = ({ width, height }) => {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGRpZXpyIiwiYSI6ImNrOW9pZzJjNjAweXYzbHJ0dDRiaGIxNWYifQ.Zycu3HxkIv6JOwJiab4tiQ"
    createMap()
  })
  const createMap = () => {
    const zoom = 0.7
    const iconSize = 0.5
    const coordinates = [13.404954, 52.520007]
    const map = new mapboxgl.Map({
      center: coordinates,
      container: "map",
      style: "mapbox://styles/ddiezr/ck9ojaa353zg21ipdmolkfgg9?fresh=true",
      zoom: zoom,
    })
    map.scrollZoom.disable()

    map.on("load", () => {
      map.loadImage("/pin.png", (error, image) => {
        if (error) {
          throw error
        }
        map.addImage("pin", image)
        map.addLayer({
          id: "points",
          layout: {
            "icon-image": "pin",
            "icon-size": iconSize,
          },
          source: {
            data: {
              features: [
                {
                  geometry: {
                    coordinates: coordinates,
                    type: "Point",
                  },
                  type: "Feature",
                },
              ],
              type: "FeatureCollection",
            },
            type: "geojson",
          },
          type: "symbol",
        })
      })
    })
  }

  return <div id={"map"} style={{ width: width, height: height }} />
}

export default Map
