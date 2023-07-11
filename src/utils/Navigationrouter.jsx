import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Aboutus from "../pages/Aboutus";
import Pagenotfound from "../pages/404";

const Listlink = [
    {
        id: 0,
        link: "/",
        element: <Home />

    }, {
        id: 1,
        link: "home",
        name: "Home",
        element: <Home />
    }, {
        id: 2,
        link: "menu",
        name: "Menu",
        element: <Menu />
    }, {
        id: 3,
        link: "aboutus",
        name: "AboutUs",
        element: <Aboutus />
    }]


const Navigationrouter = () => {

   

    //'id' + (new Date()).getTime()

    return (<>
            <Routes>
                {Listlink.map((el) => {
                    return (<Route key={el.id} path={el.link} element={el.element}></Route>)
                })}
                <Route path="menu">
                    <Route path="/menu/:params" element={<Menu />}></Route>
                </Route>
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
    </>)

}


export default Navigationrouter;