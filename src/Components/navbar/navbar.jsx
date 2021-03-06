import { Link } from "react-router-dom";
import imagen from '../img/nube-parcialmente-nublado.png';
import estilo from './navbar.module.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { AiOutlineSend } from 'react-icons/ai';
import Api from '../api/api';
import { useState } from "react";


//https://www.kuworking.com/blog/javascript-hook-para-ordenar-listas/
export default function NavbarHTML(){

    const [cantidad , setCantidad] = useState();
    const [bool , setBool] = useState(true);
    const [buscado , setBuscado] = useState("");


function onClickBoolV(){
    setBool(true);
}
function onClickBoolF(){
    setBool(false);
}

function onClickBuscar(event){
    setBuscado(event)
}


    return(
        <>
        <p hidden><Api cant={cantidad} bandera={bool} buscado={buscado}/></p> 
        
            <Navbar bg="light" expand="lg">
                <Link to="/"><img src={imagen} className={estilo.imagen} alt="no hay imagen"/></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
                <Nav.Link href="/about">About</Nav.Link>
                
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Buscar"
                className="mr-2"
                aria-label="buscar"
                />
                <Button onClick={(e) => onClickBuscar(e.target.value)} variant="outline-success"><AiOutlineSend/></Button>
            </Form>
                </Navbar.Collapse>
                <Nav >
                <NavDropdown title="Orden" className={estilo.navDerecha} >
                    <NavDropdown.Item onClick={onClickBoolV}>Acendente Alfabetica </NavDropdown.Item>
                    <NavDropdown.Item  onClick={onClickBoolF}>Decendente Alfabetica</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.ItemText>
                        <input 
                         onChange={(e) => setCantidad(e.target.value)}
                          placeholder="Cantidad a mostrar" />
                    </NavDropdown.ItemText>
                </NavDropdown>
            </Nav>
            </Navbar>
            
        </>
    )
}