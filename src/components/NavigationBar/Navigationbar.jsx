import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Aboutus from '../../pages/Aboutus';

const Navigationbar = () => {

  const Listlink = [{
    id: 1,
    link: "/home",
    name: "Home",
    element: <Home />
},{
    id: 2,
    link: "/menu",
    name: "Menu",
    element: <Menu />
},{
    id: 3,
    link: "/aboutus",
    name: "About Us",
    element: <Aboutus/>
}]

  return (
    <><div>
      {console.log(Listlink)}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">{/*style={({ isActive})=> ({ color: isActive ? 'red' : 'blue',})}*/}
      <Container>
        <Navbar.Brand href="#home">Las Ricuras Bogotanas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {Listlink.map((element) =>{
              return (<Nav.Link href={element.link}>{element.name}</Nav.Link>)
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






