import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import DesignProject from "../../components/design-project/design-project";
import { OBJECTS } from "../../projects/projects";

import "./design-projects-page-style.css"

function DesignProjectsPage() {
    return(
        <div className="container">
            <Header/>
            <h2 className="title">Дизайн проекты</h2>
            <div className="design-projects-div">
                {
                    OBJECTS.map((element) => {
                        return (<DesignProject objectData={ element }/>);
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}

export default DesignProjectsPage;