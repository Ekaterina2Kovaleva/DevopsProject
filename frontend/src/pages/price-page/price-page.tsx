import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import OpenBackFormBtn from "../../components/open-back-form-btn/open-back-form-btn";
import { PriceProps } from "../../utils/interfaces";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';

import './price-page-style.css'


function PricePage() {
    const [prices, setPrices] = useState<PriceProps[]>([]);

    useEffect(() => {
        axios.get('https://elenapapizhuk.ru/api/v1/tarriff/') 
        .then(res => {
            setPrices(res.data);
        })
        .catch(err => {
            console.log(err)
        })

    }, [])

    const [finalPrice, setFinalPrice] = useState(0);
    const [selectedArea, setSelectedArea] = useState(100);
    const [selectedTariff, setSelectedTariff] = useState<PriceProps>(prices[0]);

    const selectedTariffRef = useRef<HTMLSelectElement>(null);
    const inputRangeRef = useRef<HTMLInputElement>(null);
    const inputTextRef = useRef<HTMLInputElement>(null);

    function onSwiperTariffClick(tariff: PriceProps) {
        setSelectedTariff(tariff)
        if (selectedTariffRef.current)
            selectedTariffRef.current.value = String(tariff.price)
    }

    function onInputRangeChange() {
        setSelectedArea(Number(inputRangeRef.current?.value))
    }

    function onInputTextChange() {
        setSelectedArea(Number(inputTextRef.current?.value))
    }

    function onSelectChange() {
        const selectedPrice = Number(selectedTariffRef.current?.value)

        prices.forEach(price => {
            if (price.price === selectedPrice) {
                setSelectedTariff(price);
            }
        });
    }

    useEffect(() => {
        setFinalPrice(Number(selectedTariffRef.current?.value) * selectedArea)
    }, [selectedArea, selectedTariff]);

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Расчет стоимости</h2>
            <p className="price-page-title">Выбор пакета</p>
            <Swiper
                className="price-div-swiper"
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {
                    prices.map((price) => {
                        return (
                            <SwiperSlide>
                                <div className="tariff-slide" style={{backgroundImage: price.mainImg}}>
                                    <p className="tariff-title">{ price.name }</p>
                                    <ul className="tariff-pluses-list">
                                    { 
                                        price.description.split('\r\n').map((inf) => {
                                            return(<li className="tatiff-plus">{inf}</li>)
                                        })
                                    }
                                    </ul>
                                    <div className="tariff-slide-bottom-div">
                                        <p className="tariff-price">{ price.price } р м²</p>
                                        <Link to={'/services-design'} className="read-more-btn">Подробнее...</Link>
                                        <button 
                                            className={ selectedTariff === price ? "choose-tariff-btn-active"  : "choose-tariff-btn" }
                                            onClick={ () => onSwiperTariffClick(price) }
                                            disabled={ selectedTariff === price ? true : false }
                                        >
                                            { selectedTariff === price ? 'Тариф выбран' : 'Выбрать тариф' }
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper> 

            <p className="price-page-title">Расчитать стоимость</p>
            <div className="calculation-div">
                <p className="calculation-title">Выбранный тариф</p>
                <select className="calculation-tariff-select" ref={ selectedTariffRef } onChange={ onSelectChange }>
                    {
                        prices.map((price) => {
                            return (
                                <option className="calculation-tariff-select-option" value={ price.price }>{ price.name }</option>
                            );
                        })
                    }
                </select>
                <p className="calculation-title">Площадь помещения</p>
                <input 
                    className="calculation-selected-area-range-input"
                    ref={ inputRangeRef } 
                    type="range" 
                    value={ selectedArea }
                    min={ 10 } 
                    max={ 600 }
                    onInput={ onInputRangeChange }
                />
                <div className="calculation-selected-area">
                    <input
                        className="calculation-selected-area-text-input" 
                        ref={ inputTextRef } 
                        type="number"
                        value={ selectedArea }
                        min={ 10 } 
                        max={ 600 }
                        onInput={ onInputTextChange }
                    />
                    <p>м²</p>
                </div>
                <div className="calculation-final-price">Итого: { finalPrice } p.</div>
            </div>
            <OpenBackFormBtn/>
            <Footer/>
        </div>
    )
}

export default PricePage;
