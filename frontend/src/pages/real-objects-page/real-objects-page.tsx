import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ObjectCard from "../../components/object-card/object-card";
import { ObjectProps } from '../../utils/interfaces'

import './real-objects-page-style.css'


function RealObjectsPage() {
    const [projects, setProgects] = useState<ObjectProps[]>([]);

    useEffect(() => {
        axios.get('http://elenapapizhuk.ru/api/v1/project/') 
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
            <h2 className="title">Реализованные объекты</h2>
            <div className="design-projects-div">
                {
                    projects.map((project) => {
                        if (project.realization)
                            return (<ObjectCard { ...project }/>);
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default RealObjectsPage;