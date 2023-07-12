import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';



function Secondcarousel({props}) {
    return (<><Carousel>
        {props.map((element) => {
            console.log(props);
            return(
        <Carousel.Item key={element.params}>
            <Card >
                <div className="width-class-img">
                    <img src={element.img}></img>
                    {/*<Card.Img variant="top" src={element.img} />*/}
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