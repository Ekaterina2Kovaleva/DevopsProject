import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BACK_FORM_POST } from "../../api/telegram";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import './back-form-page-style.css'

function BackFormPage() {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputContactRef = useRef<HTMLInputElement>(null);
    const inputMessageRef = useRef<HTMLTextAreaElement>(null);

    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    function onSendBtnClick() {
        const inputName = inputNameRef.current;
        const inputContact = inputContactRef.current;
        const inputMessage = inputMessageRef.current;

        if (inputName?.value !== '' && inputContact?.value !== '' && inputMessage?.value !== '') {
            let message = `Имя: ${ inputName?.value }\n`;
            message += `Контакт связи: ${ inputContact?.value }\n`;
            message += `Сообщение: ${ inputMessage?.value }`;

            BACK_FORM_POST(message);
        }

        setIsSuccess(true)
    }

    function onCloseBtnClick() {
        setIsSuccess(false)
        navigate('/')
    }

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Оставить заявку или задать вопрос</h2>
            <div className="back-form">
                <div className="back-form-content">
                    {
                        isSuccess ? 
                            <div className="success-message">Ваше сообщение отправленно. Мы уже обрабатывем его.< br></br> Спасибо!</div> 
                        :
                            <div className="back-form-inputs">
                                <input 
                                    ref={ inputNameRef }
                                    className="back-form-input back-form-input-name"
                                    type="text" 
                                    name="name"
                                    placeholder="Имя"
                                    required
                                />
                                <input 
                                    ref={ inputContactRef } 
                                    className="back-form-input back-form-input-contact" 
                                    type="text" 
                                    name="contact"
                                    placeholder="Email/телефон"
                                    required
                                />
                                <textarea 
                                    ref={ inputMessageRef } 
                                    className="back-form-input back-form-input-message" 
                                    name="message"
                                    placeholder="Ваше сообщение"
                                    required
                                />
                            </div>
                    }
                </div>
                <button
                    type="submit"
                    onClick={ isSuccess ? onCloseBtnClick : onSendBtnClick } 
                    className="back-form-send-btn">
                        { isSuccess ? 'Закрыть' : 'Отправить' }
                </button>
            </div>
            <Footer/>
        </div>
    )
}

export default BackFormPage;