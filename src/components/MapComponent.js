import React, {useEffect} from 'react'
// import { MapContainer, TileLayer} from "react-leaflet"
import "./Map.css"
import SearchBar from './SearchBar'
import * as L from "leaflet"
import "leaflet-routing-machine";

function MapComponent() {
    // code working
    useEffect(() => {
        var mymap = L.map('map').setView([51.505, -0.09], 1)
        
        const atrribution = "&copy; <a href='https://www.openstreetmap.org/copyright'>Openstreetmap</a> Contributors"
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

        L.tileLayer(tileUrl, {
            atrribution
        }).addTo(mymap);
        L.Routing.control({
            waypoints: [
                L.latLng(34.8100187,-87.6830323),
                L.latLng(34.729847,-86.5859011)
            ],
            routeWhileDragging: false,
            draggableWaypoints: false,
            show: false,
            addWaypoints: false
        }).addTo(mymap);
    }, [])

    return (
        <div className="originalMap">
            <SearchBar/>
            <div id="map"></div>
        </div>
    )
}

export default MapComponent
