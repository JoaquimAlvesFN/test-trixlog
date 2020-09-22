import React from 'react';
import { Map as Maps, TileLayer } from 'react-leaflet';

import './map.css';

function Map() {
    return (
        <Maps center={[-3.822080, -38.514760]} zoom={12}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Maps>
    );
}

export default Map;