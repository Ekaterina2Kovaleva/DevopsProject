import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import { Navigation, Zoom } from 'swiper/modules';

import './object-page-style.css'

function ObjectPage() {
    const state = useLocation();
    const object = state.state;

    return(
        <div className="container">
            <Header/>
            <p className="object-back-link-text">
                <Link className="object-back-link" to={'/real-objects'}>Все объекты</Link> → { object.name }
            </p>
            <img className="object-main-img" src={ object.mainImg } alt="" />
            <div className="object-main-inf">
                <h2 className="object-title">{ object.name }</h2>
                <p className="object-main-text">Локация: { object.place }</p>
                <p className="object-main-text">Площадь: { object.square } м²</p>
            </div>
            <p className="object-inf">{ object.inf }</p>
            <div className="object-imgs-div">
                {
                    object.realImg.length === 0 ? 
                        <>
                            <p className="design-project-text-temporary">В данный момент проект находится в реализации.</p>
                            <Swiper
                                className="design-project-swiper"
                                spaceBetween={5}
                                loop={true}
                                zoom={true}
                                navigation={true}
                                modules={[Navigation, Zoom]}
                            >
                                {
                                    object.designImg.map((element: string | undefined) => {
                                        return (
                                            <SwiperSlide>
                                                <img className="design-project" src={element} alt=""/>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>
                        </>
                        :
                        state.state.realImg.map((element: string | undefined) => {
                            console.log(state.state.realImg.length)
                            return (<img className="object-img" src={ element } alt="" />);
                        })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default ObjectPage;