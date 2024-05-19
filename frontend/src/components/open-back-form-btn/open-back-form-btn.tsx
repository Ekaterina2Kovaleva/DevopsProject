import { Link } from "react-router-dom";

import arrow from './img/arrow.svg'
import "./open-back-form-btn-style.css";

function OpenBackFormBtn() {
    return (
        <Link to={ "/back-form" } className="back-form-link">
            <p className="back-form-link-text">Оставить заявку</p>
            <img src={ arrow } alt="Стрелка" />
        </Link>
    )
}

export default OpenBackFormBtn;