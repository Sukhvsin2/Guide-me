import React, {useState, useEffect} from 'react'
import "./Map.css"
import SearchBar from './SearchBar'
import * as L from "leaflet"
import "leaflet-routing-machine";
import SelectedElement from "./SelctedElement"

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

    // Selected Item would be hidden till the selection
    const [show, setShow] = useState(false);
    const [showData, setShowData] = useState('')

    return (
        <div className="originalMap">
            <SearchBar setShow={setShow} setShowData={setShowData} />
            <div id="map"></div>
            {show ? <SelectedElement showData={showData} setShow={setShow} /> : null}
        </div>
    )
}

export default MapComponent
