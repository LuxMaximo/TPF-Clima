import { useState, useEffect} from 'react';
import Mapa from '../mapa/mapa';
import Axios from 'axios';
import {Card , InputGroup, FormControl} from 'react-bootstrap';
import estilo from './api.module.css';


export default function Api({cant , bandera, buscado}) {

    const Api_Key= "6f7dafa2df9950a081c4846f01f3d281";
    const [ latitud, setLatitud] = useState(-24.239647919406742);
    const [ longitud, setLongitud] = useState(-64.87316258820313);
    const [ provincia, setProvincia] = useState();
    const [ muestra , setMuestra] = useState(20);
    const [ encontrar , setEncontrar] = useState([]);
   /* const [ detProvincia , setDetProvincia ] = useState(
        [{
        nuves: provincia.clouds,
        coord: provincia.coord,
        tiempo :  provincia.main,
        nombre : provincia.name,
        lluvia : provincia.rain,
        nieve : provincia.snow,
        nacion :  provincia.sys,
        clima : provincia.weather,
        viento : provincia.wind
        }])*/
        


/*
    function retroAlimentacionFor(){
        setDetProvincia(provincia)
        provincia.map((prov) => {
       return setDetProvincia([{nombre : prov.name,
                        clima : prov.weather,
                        coord : prov.coord,
                        lluvia : prov.rain,
                        nieve : prov.snow,
                        nacion : prov.sys,
                        nuves : prov.clouds,
                        tiempo : prov.main,
                        viento: prov.wind} ] ) } )*/
        /*provincia.forEach((prov , i) =>{
           setDetProvincia({nombre : prov[i].name,
                           clima : prov[i].weather,
                           coord : prov[i].coord,
                           lluvia : prov[i].rain,
                           nieve : prov[i].snow,
                           nacion : prov[i].sys,
                           nuves : prov[i].clouds,
                           tiempo : prov[i].main,
                           viento: prov[i].wind},[i]); 
        })
        provincia.forEach((prov) =>{ console.log(prov)})
    }*/
    console.log(cant, "Cantidad traida del Navbar")
    let booleano = false;
    //latitud : -24.239647919406742
    //Longitud : -64.87316258820313
    /*
    useEffect(() => {
        Axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=20&appid=${Api_Key}`)
        .then((info) => { setProvincia(info.data.list)})
        .catch((err) => { console.log('el error es ', err)})
    }, [])*/



    async function apiConOrdenamiento(){
        try {
            const resultado = await Axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=${muestra}&appid=${Api_Key}`)
            setProvincia(resultado.data.list);
            if(bandera === true ){
            setProvincia( provincia.sort((a, b) => {
                if (a.name < b.name) return 1
                if (a.name > b.name) return -1
                return 0
              }))}

            if(bandera === false ){
            setProvincia( resultado.data.list.sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0
                }))}

            } catch (error) {
            console.log("el error es", error)
            alert("No se hizo la peticion correctamente")
        }
    }

    
 /*   
function AcendenteAlfabetico(){
        provincia.sort((a, b) => {
          if (a.name < b.name) return 1
          if (a.name > b.name) return -1
          return 0
        })
      console.log("ejecutado el Acentende")
}

function DecendenteAlfabetico(){
        setProvincia(provincia.sort((a, b) => {
          if (a.name > b.name) return 1
          if (a.name < b.name) return -1
          return 0
        }))
        console.log("ejecutado el Decentende")
}*/
console.log(provincia);



    useEffect(() =>{
        
        //peticionAsync();
        //retroAlimentacionFor();
          //apiConOrdenamiento();


        //Cambio la cantidad que debe mostrar
        if (provincia== undefined){
            peticionAsync();
        }else{
            if (booleano === false && cant !== undefined){
                booleano = true;
                setMuestra(cant);
                console.log("Se hizo el cambio de cantidad para la API")
                apiConOrdenamiento();
                cant = undefined;
                
            }else{
                console.log("Sin cambios" , booleano)}

        }

        return() =>{
            if(booleano === true){
                booleano = false
            }
            console.log("componente desmontado");
        }

    },[cant , bandera , booleano, buscado])


    async function peticionAsync(){
        try {
            const resultado = await Axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${latitud}&lon=${longitud}&cnt=${muestra}&appid=${Api_Key}`)
            setProvincia(resultado.data.list);
        } catch (error) {
            console.log("el error es", error)
            alert("No se hizo la peticion correctamente")
        }
    }
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

    console.log(bandera, "el booleano del navbar")

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
    <p>aaaa1</p>
    
    <p>aaaa2</p>
    {provincia && provincia.map((prov) =>{
            
            return (<div key={prov.id}>
                <Card  className={estilo.posicionCard}>
                   <Card.Header>Clima</Card.Header>
                   <Card.Body>
                       <Card.Title> <p>{prov.name}</p></Card.Title>
                       <Card.Text>Nivel del suelo: {prov.main.grnd_level}</Card.Text>
                       <Card.Text>Humedad: {prov.main.humidity}</Card.Text>
                       <Card.Text>Presion: {prov.main.pressure}</Card.Text>
                       <Card.Text>Nivel del mar: {prov.main.sea_level}</Card.Text>
                       <Card.Text>Temperatura actual: {prov.main.temp}</Card.Text>
                       <Card.Text>Temperatura minima: {prov.main.temp_min}</Card.Text>
                       <Card.Text>Temperatura maxima: {prov.main.temp_max}</Card.Text>
                       <Card.Text>Coordenadas: Latitud { prov.coord.lat} , Longitud {prov.coord.lon}</Card.Text>
                   </Card.Body>
               </Card>

            </div>)
               
               })
    }


        
    </>
)

}