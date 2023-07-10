import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

import { aliarray } from './Thirdcarousel';


function Secondcarousel() {
    return (<><Carousel>
        {aliarray.map((element) => {
            console.log(aliarray);
            return(
        <Carousel.Item>
            <Card style={{ width: '40rem' }}>
                <div class="width-class-img">
                    <Card.Img variant="top" src={element.img} />
                </div>
                <Card.Body>
                    <Card.Title>{element.h1}</Card.Title>
                </Card.Body>
            </Card>
        </Carousel.Item>)})}
    </Carousel>
    </>);
}

export default Secondcarousel;