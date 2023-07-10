import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Aboutus from "../pages/Aboutus";
import Pagenotfound from "../pages/404";

const Navigationrouter = () => {


    const Listlink = [
    {
        link: "/",
        element: <Home />

    },{
        link: "/home",
        name: "Home",
        element: <Home />
    },{
        link: "/menu",
        name: "Menu",
        element: <Menu />
    },{
        link: "/aboutus",
        name: "AboutUs",
        element: <Aboutus/>
    }]
    


    return (<BrowserRouter>
        <Routes> 
            {Listlink.map((el) => {
                return (<Route path={el.link} element={el.element}></Route>)
            })}
            <Route path="/menu/:params/" element={<Menu />}></Route>
            <Route path="*" element={<Pagenotfound />}/>
        </Routes>

    </BrowserRouter>)

}


export default Navigationrouter;