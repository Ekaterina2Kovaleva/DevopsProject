import { Link, useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { ObjectProps } from '../../utils/interfaces'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import { Navigation, Zoom } from 'swiper/modules';

import './object-page-style.css'

function ObjectPage() {
    const state = useLocation();
    const object = state.state as ObjectProps;

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
                        {/* <>
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
                                    object.photos.map((photo) => {
                                        return (
                                            <SwiperSlide>
                                                <img className="design-project" src={ photo.image } alt=""/>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>
                        </> */}
                {
                    object.realization ? 
                        object.photos.map((photo) => {
                            if (photo.isDesign) {
                                return (<img className="object-img" src={ photo.image } alt={ photo.name } />);
                            }
                        })
                        :
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
                                    object.photos.map((photo) => {
                                        if (!photo.isDesign) {
                                            return (
                                                <SwiperSlide>
                                                    <img className="design-project" src={ photo.image } alt={ photo.name }/>
                                                </SwiperSlide>
                                            );
                                        }
                                    })
                                }
                            </Swiper>
                        </>
                }
            </div>
            <Footer/>
        </div>
    )
}

export default ObjectPage;