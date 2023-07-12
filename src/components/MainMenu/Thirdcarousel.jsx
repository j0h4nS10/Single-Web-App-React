import Carousel from 'react-bootstrap/Carousel';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Thirdcarousel = ({props}) => {
  
  return (<>
    <div class="mt-5 mb-5">
      <Carousel control="false" indicators="false">
        {props.map((element)=>{
          console.log(props);
          return(<Carousel.Item key={element.params}>
          <div>
            <div>
              <h1>{element.h1}</h1>
              <p>{element.p1}</p>
              <p>{element.p2}</p>
            </div>
            <div>
             <Link to={element.paramslink}><Button variant="primary">{element.linkname}</Button></Link> 
            </div>
          </div>
        </Carousel.Item>)})}
      </Carousel>
    </div>
  </>);
}

export default Thirdcarousel;