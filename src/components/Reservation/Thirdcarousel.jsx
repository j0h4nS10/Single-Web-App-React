import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';


export const aliarray = [
  {
    params : "breakfast",
    paramslink: ":breakfast",
    h1: `BREAKFAST`,
    p1: `Strawberrys breackfast with scrumble eggs and sauces
    qieorajlkfdjas qiwoeralkfj`,
    p2: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    link: ``,
    linkname: "Get more info",
    img: `https://pysznosci-pl.wpcdn.pl/img/2023/05/deser-neapolitanski-mini.jpg`,
    imgalt: "slide 1",
    imgcaph1: "First Slide Label",
    imgcapp : "Nutella with ..."
  },{
    params: "lunch",
    paramslink: "#lunch/",
    h1: `LUNCH`,
    p1: `Strawberrys breackfast with scrumble eggs and sauces
    qieorajlkfdjas qiwoeralkfj`,
    p2: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    link: ``,
    linkname: "Get more info",
    img: `https://previews.123rf.com/images/spe/spe0901/spe090100021/4175296-ice-cream-desser-with-topping-on-
    the-plate.jpg`,
    imgalt: "slide 2",
    imgcaph1: "Second Slide Label",
    imgcapp : "Nutella with ..."
  },{
    params: "desert",
    paramslink: ":/desert/",
    h1: `DESERT`,
    p1: `Strawberrys breackfast with scrumble eggs and sauces
    qieorajlkfdjas qiwoeralkfj`,
    p2: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
    link: ``,
    linkname: "Get more info",
    img: `https://e0.pxfuel.com/wallpapers/472/317/desktop-wallpaper-dessert-desser-cupcake-food-sweets.jpg`,
    imgalt: "slide 3",
    imgcaph1: "Third Slide Label",
    imgcapp : "Nutella with ..."
  }
]

const Thirdcarousel = () => {
  
  return (<>
    <div class="mt-5 mb-5">
      <Carousel control="false" indicators="false">
        {aliarray.map((element)=>{
          console.log(aliarray);
          return(<Carousel.Item key={element.params}>
          <div>
            <div>
              <h1>{element.h1}</h1>
              <p>{element.p1}</p>
              <p>{element.p2}</p>
            </div>
            <div>
             <Button variant="primary">{element.paramslink}</Button> 
            </div>
          </div>
        </Carousel.Item>)})}
      </Carousel>
    </div>
  </>);
}

export default Thirdcarousel;