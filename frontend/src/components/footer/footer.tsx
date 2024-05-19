import { Link } from "react-router-dom";

import whatsAppLogo from './img/whatsapp-svgrepo-com.svg';
import tgLogo from './img/telegram-svgrepo-com.svg';
import instLogo from './img/instagram-svgrepo-com.svg';
import vkLogo from "./img/vk-svgrepo-com.svg";
import "./footer-style.css";

function Footer() {
    return (
        <div className="footer-container">
            <p className="footer-text">Контакты</p>
            <div className="footer-contacts-container">
                <p className="footer-name">Елена</p>
                <a className="footer-number" href="tel:+79156414442">+ 7 915 641 44 42</a>
                <div className="footer-links-container">
                    <Link to={'https://wa.me/+79156414442'} className="footer-link" target="_blank">
                        <img src={ whatsAppLogo } alt="Логотип ватсап"/>
                    </Link>
                    <Link to={'https://t.me/ElenaPapizhuk'} className="footer-link" target="_blank">
                        <img src={ tgLogo } alt="Логотип ТГ"/>
                    </Link>
                    <Link to={'https://www.instagram.com/elena_papizhuk_designer?igsh=YW53c3h3YWViNGg3'} className="footer-link" target="_blank">
                        <img src={ instLogo } alt="Логотип инста"/>
                    </Link>
                    <Link to={'https://vk.com/papizuk_design'} className="footer-link" target="_blank">
                        <img src={ vkLogo } alt="Логотип ВК"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;