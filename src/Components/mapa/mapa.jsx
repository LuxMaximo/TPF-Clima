import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import 'react-leaflet'
/*
https://www.youtube.com/watch?v=d3E-dNC5RMc   Imagen de fondo con capa transparente utilizando css
https://www.youtube.com/watch?v=Vf8hoR-EqMQ   Trucos CSS (28) - Background-image transparente
https://www.youtube.com/watch?v=nytKEUqzAMk   Let's get the Current Location using Geolocation API in React
https://www.youtube.com/results?search_query=React+%26+Leaflet+con+Geolocation&sp=EgQIBBAB

https://openweathermap.org/current#current_JSON  API
*/
const redOptions = { color: 'red' }

export default function Mapa({latitud, longitud}){
    return(
        <>
        <div style={{marginLeft: '70px', marginTop: '10px'}}>
            <MapContainer center={[latitud, longitud]} style={{width: "90vw" , height : '80vh'}} zoom={9} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={[latitud, longitud]} pathOptions={redOptions} radius={51400} />
                <Marker position={[latitud, longitud]}>
                    <Popup>
                    Lugar que marco <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
        </>
    )
}