import Carousel from 'react-bootstrap/Carousel';
import { aliarray } from '../Reservation/Thirdcarousel';


const Maincarousel = () => {
  return (<><div className="container w-100">
    <div className='d-flex justify-content-center'><Carousel>
      {aliarray.map((element) => {
        console.log(aliarray);
        return (
          <Carousel.Item key={element.params}> 
            <img className="w-100"
              src={element.img}
              alt={element.imgalt}
            />
            <Carousel.Caption>
              <h3>{element.imgcaph1}</h3>
              <p>{element.imgcapp}</p>
            </Carousel.Caption>
          </Carousel.Item>)
      })}
    </Carousel>


    </div>
    </div>
  
  </>
  );
}

export default Maincarousel;