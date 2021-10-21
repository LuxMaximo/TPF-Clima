//import Axios from 'axios';
import { useState, useEffect} from 'react';
import Mapa from '../mapa/mapa';
import Axios from 'axios';
import {Card , InputGroup, FormControl} from 'react-bootstrap';
import estilo from './api.module.css';
import DatosPC from './history_bulk.json';


export default function Api({cant , bandera}) {

    const Api_Key= "6f7dafa2df9950a081c4846f01f3d281";
    const [ latitud, setLatitud] = useState(51.507351);
    const [ longitud, setLongitud] = useState(-0.127758);
    const [ provincia, setProvincia] = useState([]);
    const [ muestra , setMuestra] = useState(20);
    let booleano = false;
    //latitud : -24.239647919406742
    //Longitud : -64.87316258820313
    /*
    useEffect(() => {
        Axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=20&appid=${Api_Key}`)
        .then((info) => { setProvincia(info.data.list)})
        .catch((err) => { console.log('el error es ', err)})
    }, [])*/

    async function peticionAsync(){
        try {
            const resultado = await Axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=${muestra}&appid=${Api_Key}`)
            setProvincia(resultado.data.list)
        } catch (error) {
            console.log("el error es", error)
            alert("No se hizo la peticion correctamente")
        }
    }
    
function AcendenteAlfabetico(){
    console.log(
        provincia.sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        }), "Probando la funcion AcendenteAlfabetico"
      )
}

function DecendenteAlfabetico(){
    console.log(
        provincia.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }), "Probando la funcion DecendenteAlfabetico"
      )
}
    useEffect(() =>{
        peticionAsync();
           // setProvincia(DatosPC)
        
        console.log(muestra , "Muestro la cantidad que hay")
        if (booleano === false && cant !== undefined){
            //booleano = true;
            //setMuestra(cant)
        }else{
            console.log("Sin cambios" , booleano)
        }

        if(bandera === true){
            AcendenteAlfabetico();
        }else if(bandera===false){
            DecendenteAlfabetico();
        }

        return() =>{
            if(booleano === true){
                booleano = false
            }
            console.log("componente desmontado");
        }
    },[cant , bandera])
/*
    function informacionCli(){
        const respuesta = fetch(`https://api.openweathermap.org/data/2.5/find?lat=-24.239647919406742&lon=-64.87316258820313&cnt=20&appid=${Api_Key}`)
        
        respuesta
        .then((info) =>  info.json())
        .then((info) => console.log(info))
        .catch(() => {})
    }*/
/*
    function informacionDin(){
        fetch(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=${muestra}&appid=${Api_Key}`)
        .then((info) =>  info.json())
        .then((info) => console.log(info))
        .catch(() => {})
    }*/
console.log(provincia , "Muestro la provincia")
console.log(
    provincia.sort((a, b) => {
      if (a.name < b.name) return 1
      if (a.name > b.name) return -1
      return 0
    }), "Probando el sort "
  )

return(
    <>
    <br/>
    <InputGroup className={estilo.posicionInput}>
        <InputGroup.Text>Latitud y Longitud</InputGroup.Text>
        <FormControl placeholder="Latitud" onInput={(e) => setLatitud(e.target.value)} aria-label="First name" />
        <FormControl placeholder="Longitud" onInput={(e) => setLongitud(e.target.value)} aria-label="Last name" />
    </InputGroup>
    
    <Mapa  longitud={longitud} latitud={latitud} />
    <br/>

   
        {/* provincia && provincia.map((prov) =>{
            
             return <div>
                 <Card key={prov.name} className={estilo.posicionCard}>
                    <Card.Header>Clima</Card.Header>
                    <Card.Body>
                        <Card.Title> <p >{prov.name/*prov.name}</p></Card.Title>
                        <Card.Text>Nivel del suelo: {prov.main.grnd_level}</Card.Text>
                        <Card.Text>Humedad: {prov.main.humidity}</Card.Text>
                        <Card.Text>Presion: {prov.main.pressure}</Card.Text>
                        <Card.Text>Nivel del mar: {prov.main.sea_level}</Card.Text>
                        <Card.Text>Temperatura actual: {prov.main.temp}</Card.Text>
                        <Card.Text>Temperatura minima: {prov.main.temp_min}</Card.Text>
                        <Card.Text>Temperatura maxima: {prov.main.temp_max}</Card.Text>
                        <Card.Text>Coordenadas: Latitud {prov.lat /*prov.coord.lat} , Longitud {prov.lon /*prov.coord.lon}</Card.Text>
                    </Card.Body>
                </Card>

             </div>
                
                }
            )
            */}
    </>
)

}