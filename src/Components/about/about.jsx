import yo from '../img/io.jpeg';
import {Card} from 'react-bootstrap'
import estilo from './about.module.css'
//crear un card con mi foto, nombre completo y informacion adicional
export default function about(){
return (
    <>
    <div>
        <Card className="bg-dark text-white">
            <Card.Img src={yo} className={estilo.imagen} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Lucas Maximiliano, Motok</Card.Title>
                    <Card.Subtitle> DNI </Card.Subtitle>
                    <Card.Text>40330508</Card.Text>
                    <Card.Subtitle> Correo</Card.Subtitle>
                    <Card.Text>motok.lucas@outlook.com.ar</Card.Text>
                    <Card.Text> Estudiante de la carrera universitaria APU </Card.Text>
                    <Card.Text>Titulado en:</Card.Text>
                    <Card.Text> HTML5 de front-end</Card.Text>
                    <Card.Text> REACT</Card.Text>
                    <Card.Text> CSS</Card.Text>
                    <Card.Text> Java</Card.Text>
                    <Card.Text> POO</Card.Text>
                </Card.ImgOverlay>
            </Card>
    </div>
    </>
)
}