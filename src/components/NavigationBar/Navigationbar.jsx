import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom';


const Navigationbar = ({props}) => {

  return (
    <><div>
      {console.log(`props en el navigationbar ${props}`)}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">{/*style={({ isActive})=> ({ color: isActive ? 'red' : 'blue',})}*/}
      <Container>
        <Navbar.Brand href="/home">Ricuras Rolas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.map((element) =>{
              return (<Nav.Link key={element.id} as={Link} to={element.link}>{element.name}</Nav.Link>)
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>            
    </>
  );
}

export default Navigationbar






