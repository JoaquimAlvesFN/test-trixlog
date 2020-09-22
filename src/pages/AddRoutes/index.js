import React, { useState } from 'react';

import Template from '../../components/Template';

import './add.css';

function AddRoutes() {
    const [routeName, setRouteName] = useState('');
    const [routeDate, setRouteDate] = useState('');
    const [stopName, setStopName] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [stopList, setStopList] = useState([]);

    const salvar = (e) => {
        e.preventDefault();

        if(!routeName && !routeDate) {
            return alert('Preencher Formulario.');
        }

        if(stopList.length < 2) {
            return alert('Deve existir pelo menos 2 rotas definidas');
        }

        console.log({
            routeName,
            routeDate,
            stopList
        })

        setRouteName('');
        setRouteDate('');
        
    }

    const addStopList = async (e) => {
        e.preventDefault();

        if(!stopName || !latitude || !longitude) {
            return alert('Preencher dados de parada!');
        }

        if(!routeName) {
            return alert('Preencher o nome da rota.');
        }

        setStopList([
            ...stopList,
            {
                name: stopName, 
                position: {
                    lat: latitude,
                    lng: longitude
                }
            }
        ]);

        setStopName('');
        setLatitude('');
        setLongitude('');
    }

    return (
        <Template>
            <div className="add-container">
                <form onSubmit={salvar}>
                    <div className="add-routes">
                        <input placeholder="Nome da Rota" value={routeName} onChange={e => setRouteName(e.target.value)}/>
                        <input placeholder="Data" value={routeDate} onChange={e => setRouteDate(e.target.value)}/>
                    </div>
                    <div className="add-stopList">
                        <input placeholder="Nome" value={stopName} onChange={e => setStopName(e.target.value)}/>
                        <input placeholder="Latitude" value={latitude} onChange={e => {setLatitude(e.target.value)}}/>
                        <input placeholder="Longitude" value={longitude} onChange={e => {setLongitude(e.target.value)}}/>
                        <button onClick={addStopList} type="button">Adicionar Parada</button>
                    </div>
                    <button className="button-form" type="submit">Adicionar Rota</button>
                </form>
            </div>
            <div className="stopList-cards">
                {
                    stopList.map(stop => (
                        <div className="stopList-card">
                            <h3>{stop.name}</h3>
                            <span>{stop.position.latitude}</span>
                            <span>{stop.position.longitude}</span>
                        </div>
                    ))
                }
            </div>
        </Template>
    );
}

export default AddRoutes;