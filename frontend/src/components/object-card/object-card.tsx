import { useNavigate } from "react-router-dom";

import "./object-card-style.css";
import arrow from './img/arrow.svg'

interface ObjectCardProps {
    objectCardData: {
        name: string;
        place: string;
        square: string;
        designImg: string[];
        realization: boolean;
        inf: string;
        mainImg: string;
        realImg: never[];
    }
}

function ObjectCard({ objectCardData } : ObjectCardProps) {
    const navigate = useNavigate();

    function onClick() {
        navigate('/object',{state: objectCardData })
    }

    return (
        <button onClick={ onClick } className="object-card-div">
            <img className='object-card-img' src={ objectCardData.mainImg } alt=""/>
            <div className="shadow"></div>
            <div className="object-card-text-div">
                <div>
                    <p className="object-card-text">{ objectCardData.name }</p>
                    <p  className="object-card-text"> в { objectCardData.place } | { objectCardData.square } м²</p>
                </div>
                <img src={ arrow } alt="" />
            </div>
        </button>
    )
}

export default ObjectCard;