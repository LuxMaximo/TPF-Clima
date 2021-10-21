import { Link } from "react-router-dom";
import { GoHeart } from 'react-icons/go';
import { GrFacebookOption, GrGithub, GrLinkedin } from 'react-icons/gr';
import {ImInstagram , ImWhatsapp , ImSteam2, ImPaypal} from 'react-icons/im';
import estilo from './footer.module.css'
import { OverlayTrigger, Tooltip } from "react-bootstrap";


//https://react-icons.github.io/react-icons/icons?name=gr


export default function footer() {

    
    return(
        <>
        <div className={estilo.divisor} >

            <Link to='/footer/contacto' className={estilo.link} > Contacto <GoHeart/> </Link>
            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">Facebook</Tooltip>}>
            <a className={estilo.linkface} href='https://www.facebook.com/max.luxman/' target='_blank'  rel='noreferrer'> <GrFacebookOption/>    </a>
            </OverlayTrigger>

            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">LinkedIn</Tooltip>}>
            <a className={estilo.linkIN} href='https://www.linkedin.com/in/lucas-maximiliano-motok-3162ba200/' target='_blank'  rel='noreferrer'> <GrLinkedin/>   </a>
            </OverlayTrigger>
            
            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">Instagram</Tooltip>}>
            <a className={estilo.linkins} href='https://www.instagram.com/maximotok/' target='_blank'  rel='noreferrer'> <ImInstagram/>   </a>
            </OverlayTrigger>

            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">GitHub</Tooltip>}>
            <a className={estilo.linkgit} href='https://github.com/LuxMaximo' target='_blank'  rel='noreferrer'><GrGithub/></a>
            </OverlayTrigger>

            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">Steam</Tooltip>}>
            <a className={estilo.linksteam} href='https://steamcommunity.com/id/LuxMaximo/' target='_blank'  rel='noreferrer'> <ImSteam2/> </a>
            </OverlayTrigger>

            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">Whatsapp</Tooltip>}>
            <a className={estilo.linkwsp} href='https://wa.me/+543888603129' target='_blank'  rel='noreferrer'> <ImWhatsapp/> </a>
            </OverlayTrigger>

            <OverlayTrigger placement='top' overlay={<Tooltip id="button-tooltip-2">Paypal</Tooltip>}>
            <a className={estilo.linkPaypal} href='https://paypal.me/lucasmotok1?locale.x=es_XC' target='_blank'  rel='noreferrer'> <ImPaypal/> </a>
            </OverlayTrigger>
            
        </div>
        </>
    )
}