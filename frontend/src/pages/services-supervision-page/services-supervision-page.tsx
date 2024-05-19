import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenPricePageBtn from "../../components/open-price-page-btn/open-price-page-btn";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";

import './services-supervision-page-style.css'

function ServicesSupervisionPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Авторский надзор</h2>
            <p className="supervision-page-text">Благодаря авторскому надзору, вы можете быть уверены, что дизайн-проект будет реализован точно так, как был задуман.</p>
            <ul>
                <li className="supervision-page-text">- выезд на объект от 4-х раз в месяц</li>
                <li className="supervision-page-text">- контроль соответствия хода стройки задуманному проекту</li>
                <li className="supervision-page-text">- корректировка чертежей в ходе реализации проекта</li>
                <li className="supervision-page-text">- согласование всех образцов материалов на объекте при различном освещении</li>
                <li className="supervision-page-text">- подбор аналогов при снятии с производства</li>
                <li className="supervision-page-text">- ответы на вопросы строителей в мессенджерах</li>
            </ul>
            <p className="supervision-page-text last-text">Цена - индивидуально.</p>
            <OpenPricePageBtn/>
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default ServicesSupervisionPage;