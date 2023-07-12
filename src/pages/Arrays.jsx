import Home from "./Home"
import Menu from "./Menu"
import Aboutus from "./Aboutus"


export const Listlink = [{
  id: 0,
  link: "/",
  element: <Home />
}, {
  id: 1,
  link: "/",
  name: "Home",
  element: <Home />
}, {
  id: 2,
  link: "/menu",
  name: "Menu",
  element: <Menu />
}, {
  id: 3,
  link: "/aboutus",
  name: "About Us",
  element: <Aboutus />
}]


const aliarray = [
  {
    params: "breakfast",
    paramslink: "/menu/breakfast",
    h1: `BREAKFAST`,
    p1: `delicious gourmet breakfast with a base of scrambled eggs with sausage, arepa boyacence, 
    chocolate with almojabana`,
    p2: `delicioso desayuno tipo gourmet con una base de huevos revueltos con salchicha, arepa tipica boyacence,
     chocolate en lecha y almojabana tipica.`,
    link: ``,
    linkname: "Get more info",
    img: `https://pysznosci-pl.wpcdn.pl/img/2023/05/deser-neapolitanski-mini.jpg`,
    imgalt: "slide 1",
    imgcaph1: "Breakfast",
    imgcapp: " "
  }, {
    params: "lunch",
    paramslink: "/menu/lunch",
    h1: `LUNCH`,
    p1: `Strawberrys breackfast with scrumble eggs and sauces
    qieorajlkfdjas qiwoeralkfj`,
    p2: `delicioso desayuno tipo gourmet con una base de huevos revueltos con salchicha, arepa boyacence, 
    chocolate con almojabana.`,
    link: ``,
    linkname: "Get more info",
    img: `https://previews.123rf.com/images/spe/spe0901/spe090100021/4175296-ice-cream-desser-with-topping-on-
    the-plate.jpg`,
    imgalt: "slide 2",
    imgcaph1: "Lunch",
    imgcapp: " "
  }, {
    params: "desert",
    paramslink: "/menu/desert",
    h1: `DESERT`,
    p1: `Strawberrys breackfast with scrumble eggs and sauces
    qieorajlkfdjas qiwoeralkfj`,
    p2: `delicioso desayuno tipo gourmet con una base de huevos revueltos con salchicha, arepa boyacence, 
    chocolate con almojabana.`,
    link: ``,
    linkname: "Get more info",
    img: `https://e0.pxfuel.com/wallpapers/472/317/desktop-wallpaper-dessert-desser-cupcake-food-sweets.jpg`,
    imgalt: "slide 3",
    imgcaph1: "desert",
    imgcapp: " "
  }
]

export default aliarray