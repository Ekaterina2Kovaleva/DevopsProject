import { Link } from "react-router-dom";

import './not-found-page-style.css'

function NotfoundPage() {
    return(
        <div className="container">
            <title>Страница не найдена</title>
            <meta
                name="description"
                content="Страница не найдена"
            />
            <h1 className="title">Page not found</h1>
            <Link to={ "/" } className="not-found-link"> 
                <p className="not-found-text">Перейти на главную -{'>'}</p>
            </Link>
        </div>
    )
}

export default NotfoundPage