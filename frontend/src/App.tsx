import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import ServicesDesignPage from "./pages/services-design-page/services-design-page";
import ServicesSupervisionPage from "./pages/services-supervision-page/services-supervision-page";
import DesignProjectsPage from "./pages/design-projects-page/design-projects-page";
import RealObjectsPage from "./pages/real-objects-page/real-objects-page";
import ObjectPage from "./pages/object-page/object-page";
import PricePage from "./pages/price-page/price-page";
import BackFormPage from "./pages/back-form-page/back-form-page";
import NotfoundPage from "./pages/not-found-page/not-found-page";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/services-design' element={<ServicesDesignPage/>}/>
          <Route path='/services-supervision' element={<ServicesSupervisionPage/>}/>
          <Route path="/design-projects" element={<DesignProjectsPage/>}/>
          <Route path="/real-objects" element={<RealObjectsPage/>}/>
          <Route path="/object" element={<ObjectPage/>}/>
          <Route path="/price" element={<PricePage/>}/>
          <Route path="/back-form" element={<BackFormPage/>}/>
          <Route path="*" element={<NotfoundPage />}/>
        </Routes>
      </ScrollToTop>
    </BrowserRouter> 
  )
}

export default App
