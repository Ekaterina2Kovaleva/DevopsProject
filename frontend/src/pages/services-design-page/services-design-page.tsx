import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenPricePageBtn from "../../components/open-price-page-btn/open-price-page-btn";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";

import './services-design-page-style.css'

function ServicesDesignPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Дизайн проект</h2>
            <p className="design-page-text">Создание дизайн-проекта интерьера - это сложный и многоэтапный процесс. Включает в себя анализ, концептуальное решение, подбор материалов, оборудования и мебели, а также разработку чертежей и 3D-визуализаций. Вы получаете гармоничный и функциональный интерьер, который будет радовать вас каждый день.</p>
            <h3 className="design-page-title">Комплект чертежей включает в себя:</h3>
            <ul>
                <li className="design-page-text">1. Планировочное решение</li>
                <li className="design-page-text">2. Обмерный план</li>
                <li className="design-page-text">3. План демонтажа</li>
                <li className="design-page-text">4. План монтажа</li>
                <li className="design-page-text">5. План после перепланировки</li>
                <li className="design-page-text">6. План расстановки мебели</li>
                <li className="design-page-text">7. План розеток и выключателей</li>
                <li className="design-page-text">8. План освещения</li>
                <li className="design-page-text">9. План привязки освещения и выключателей</li>
                <li className="design-page-text">10. План сантехнического оборудования</li>
                <li className="design-page-text">11. План напольных покрытий и плинтусов</li>
                <li className="design-page-text">12. План/спецификация дверей</li>
                <li className="design-page-text">13. План теплых полов, кондиционирования</li>
                <li className="design-page-text">14. План потолков</li>
                <li className="design-page-text">15. Развертки стен по каждому помещению</li>
            </ul>
            <h3 className="design-page-title">3Д визуализации</h3>
            <p className="design-page-text">Визуализации по каждому помещению - фотореалистичные картинки.</p>
            <h3 className="design-page-title">Стандартный срок разработки проекта:</h3>
            <ul>
                <li className="design-page-text">для объекта площадью 30-50 м.кв. - 35 рабочих дней</li>
                <li className="design-page-text">для объекта площадью 50-100 м.кв. - 60 рабочих дней </li>
                <li className="design-page-text">для объекта площадью 100-150 м.кв. - 80 рабочих дней для объекта </li>
                <li className="design-page-text">площадью от 150 м.кв. - индивидуально</li>
            </ul>
            <p className="design-page-text last-text">Сроки могут меняться и обговариваются индивидуально.</p>
            <OpenPricePageBtn/>
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default ServicesDesignPage;