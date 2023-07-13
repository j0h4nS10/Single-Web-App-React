import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Aboutus from "../pages/Aboutus";
import Pagenotfound from "../pages/404";




const Navigationrouter = ({props}) => {

    
    //'id' + (new Date()).getTime()

    return (<>
            <Routes>
                {props.map((el) => {
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