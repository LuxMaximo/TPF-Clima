import { Form , FloatingLabel, Button } from "react-bootstrap"
import estilo from './contacto.module.css';
import { useState } from "react";


export function validacion(input){
    let error = {}
     if(!input.email){
        error.email = "Correo requerido"
     }else if(!/\S+@\S+\.\S+/.test(input.email)){
         error.email = "La entrada debe ser un correo electronico"
     }

     if(!input.nombre){
         error.nombre = "nombre requerido"
     }else if(!/\S{5,20}/.test(input.nombre)){
         error.nombre = "El minimo de caracteres en el nombre es de 4"
     }

     if(!input.mensaje){
         error.mensaje = "Falta escribir el detalle del mensaje"
     }else if(!/\S{0,300}/.test(input.mensaje)){
         error.mensaje = "Se llego al maximo de caracteres posibles"
     }

     return error
}


export default function Contacto() {

    const [state, setState] = useState({
        email:'',
        nombre:'',
        mensaje:'',
        cont: 256
    })

    const [fail , setFail] = useState({
        email: "email requerido",
        nombre:"nombre requerido",
        mensaje:"Mensaje requerido"
    })

    function onSubmitForm(e){
        e.preventDefault();
        alert(`el email es ${state.email} y el nombre es ${state.nombre}`)
    }

    function onHandleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })

        setFail(validacion({
            ...state,
            [e.target.name] : e.target.value
        }))
    }


    return(
        <>
        <div className={estilo.contenedor} >
            <Form.Floating className="mb-3" >
                <Form.Control
                id="floatingInputCustom"
                name="email"
                placeholder="name@example.com"
                onChange={(e) => onHandleChange(e)}
                />
                <label onChange={(e) => onHandleChange(e)} htmlFor="floatingInputCustom">Correo Electronico</label>
                {fail.email ? <p>{fail.email}</p> : <p></p>}
            </Form.Floating>


            <Form.Floating className="mb-3">
                <Form.Control type="text"
                 name="nombre"
                  placeholder="Escribe tu nombre"
                   onChange={(e) => onHandleChange(e)} />

                <label >Nombre</label>
                {fail.nombre ? <p> {fail.nombre} </p> : <p></p>}
            </Form.Floating>


            <FloatingLabel className="mb-3" controlId="floatingTextarea2" label="Mensaje">
                <Form.Control 
                as="textarea" 
                name="mensaje" 
                placeholder="Deja tu mensaje" 
                onChange={(e) => onHandleChange(e)} 
                style={{ height: '200px' }}/>

                {fail.mensaje ?  <p>{fail.mensaje}</p> : <p></p>}
            </FloatingLabel>

            <Button variant="success" href="/" onClick={(e) => onSubmitForm(e)} disabled={fail.email || fail.nombre ? true : fail.mensaje? true :false}>Enviar</Button>
            <Button variant="danger" href="/">Cancelar</Button>
        </div>
        </>
    )
}