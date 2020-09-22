import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';

import Template from '../../components/Template';
import Map from '../../components/Map';

import './list.css';

function ListRoutes() {
    const rotas = [
        { 
            name: 'rota01', 
            routeDate: new Date(), 
            stops: [
                {name: 'parada01', lat: 0.0000, lng: 0.000}
            ], 
            encodedPath: 'PATH ENCODADO DA ROTA'
        },
        { name: 'rota02', routeDate: new Date(), stops: [], encodedPath: 'PATH ENCODADO DA ROTA'},
        { name: 'rota03', routeDate: new Date(), stops: [], encodedPath: 'PATH ENCODADO DA ROTA'},
        { name: 'rota04', routeDate: new Date(), stops: [], encodedPath: 'PATH ENCODADO DA ROTA'},
    ];

    L.Routing.control({
        waypoints: [
            L.latLng(27.67, 85.316),
            L.latLng(27.68, 85.321)
        ]
    }).addTo(Map);

    return (
        <div className="container">
            <Template>
                <div>
                    {
                        rotas.map(rota => (
                            <div className="card-route">
                                <span>{rota.name}</span>
                            </div>
                        ))
                    }
                </div>
            </Template>
            <Map />
        </div>
    );
}

export default ListRoutes;