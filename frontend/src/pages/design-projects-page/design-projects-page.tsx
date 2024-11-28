import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DesignProject from "../../components/design-project/design-project";
import { ObjectProps } from '../../utils/interfaces'

import "./design-projects-page-style.css"

function DesignProjectsPage() {
    const [projects, setProgects] = useState<ObjectProps[]>([]);

    useEffect(() => {
        axios.get('http://127.0.0.1/api/v1/project/') 
        .then(res => {
            setProgects(res.data);
        }) 
        .catch(err => {
            console.log(err)
        })
    }, [])

    return(
        <div className="container">
            <Header/>
            <h2 className="title">Дизайн проекты</h2>
            <div className="design-projects-div">
                {
                    projects.map((element) => {
                        return (<DesignProject { ...element }/>);
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default DesignProjectsPage;