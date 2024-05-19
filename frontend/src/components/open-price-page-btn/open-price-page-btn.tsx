import { Link } from "react-router-dom";

import arrow from './img/arrow.svg'
import "./open-price-page-btn-style.css";

function OpenPricePageBtn() {
    return (
        <Link to={ "/price" } className="price-link">
            <p className="price-link-text">Рассчет стоимости вашего заказа</p> 
            <img src={ arrow } alt="Стрелка" />
        </Link>
    )
}

export default OpenPricePageBtn;