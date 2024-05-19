import { useNavigate,  Link } from "react-router-dom";
import { useState } from "react";

import logo from "./img/logo.svg";
import "./header-style.css";

function Header() {
    const [isActive, setActive] = useState(false);
    const navigate = useNavigate();
      
    function OpenMenuBtnClick() {
        if (isActive) {
            setActive(false);
            window.onscroll = () => { '' };
        } else {
            setActive(true);
            window.onscroll = () => { window.scroll(0, 0); };
        }
    }

    function onClickHandler(link: string) {
        setActive(false);
        window.onscroll = () => { '' };
        navigate(link);
    }

    return (
        <div className="header-container">
            <div className="header-container-title">
                <Link to={ "/" }>
                    <img className="header-logo" src={ logo } alt='Логотип'/>
                </Link>
                <button className='hamburger-lines' onClick={ OpenMenuBtnClick }>
                    <span className={isActive ? 'line line1' : 'line'}></span>
                    <span className={isActive ? 'line line2' : 'line'}></span>
                    <span className={isActive ? 'line line3' : 'line'}></span>
                </button>
            </div>
            <ul className="menu-modal-container" style={ isActive ? { visibility: 'visible' } : { visibility: 'hidden' } }>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/") }>
                            Главная
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal  indent"
                        onClick={() => onClickHandler("/price") }>
                            Рассчитать стоимость проекта
                    </button>
                </li>
                <li className="title-menu-modal">
                    Портфолио
                    <div className="title-menu-modal-line port-top"/>
                    <div className="title-menu-modal-line port-bottom"/>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/design-projects") }>
                            Дизайн проекты
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal indent" 
                        onClick={() => onClickHandler("/real-objects") }>
                            Реализованные объекты
                    </button>
                </li>
                <li className="title-menu-modal">
                    Информация об услугах
                    <div className="title-menu-modal-line inf-top"/>
                    <div className="title-menu-modal-line inf-bottom"/>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/services-design") }>
                            Дизайн проект
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal indent" 
                        onClick={() => onClickHandler("/services-supervision") }>
                            Авторский надзор
                    </button>
                </li>
                <li>
                    <button 
                        className="link-menu-modal" 
                        onClick={() => onClickHandler("/back-form") }>
                            Связаться со мной
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Header;