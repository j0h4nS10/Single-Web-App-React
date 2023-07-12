import Carousel from 'react-bootstrap/Carousel';



const Maincarousel = ({props}) => {
  return (<><div className="container w-100">
    <div className='d-flex justify-content-center'><Carousel>
      {props.map((element) => {
        console.log(`props dentro de maincarousel ${props}`);
        console.log(props)
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