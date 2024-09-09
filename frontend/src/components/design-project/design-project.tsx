import { ObjectProps } from '../../utils/interfaces'

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';

import { Navigation, Zoom } from 'swiper/modules';

import "./design-project-style.css";


function DesignProject(objectData : ObjectProps) {
    return (
        <div className="design-project-div">
            <div className="design-project-swiper-div">
                <div className="design-project-swiper-shadows"></div>
                <Swiper
                    className="design-project-swiper"
                    spaceBetween={5}
                    loop={true}
                    zoom={true}
                    navigation={true}
                    modules={[Navigation, Zoom]}
                >
                    {
                        objectData.photos.map((photo) => {
                            if (!photo.isDesign) {
                                return (
                                    <SwiperSlide>
                                        {/* <div className="swiper-zoom-container">
                                            <img className="design-project" src={e} alt=""/>
                                        </div> */}
                                        <img className="design-project" src={ photo.image } alt=""/>
                                    </SwiperSlide>
                                );
                            }
                        })
                    }
                </Swiper>
            </div>
            <p className="design-project-text">{ objectData.name }</p>
            <p className="design-project-text"> в { objectData.place } | { objectData.square } м²</p>
        </div>
    )
}

export default DesignProject;