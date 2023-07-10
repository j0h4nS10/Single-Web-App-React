import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Aboutus from '../../pages/Aboutus';

const Navigationbar = () => {

  const Listlink = [{
    link: "/home",
    name: "Home",
    element: <Home />
},{
    link: "/menu",
    name: "Menu",
    element: <Menu />
},{
    link: "/aboutus",
    name: "About Us",
    element: <Aboutus/>
}]

  return (
    <><div>
      <Navbar>{/*style={({ isActive})=> ({ color: isActive ? 'red' : 'blue',})}*/}
        <Container>
          <Navbar.Brand href="/home">Las Ricuras Bogotas</Navbar.Brand>
          <Nav className="me-auto">
            {Listlink.map((element) =>{
              return (<Nav.Link href={element.link}>{element.name}</Nav.Link>)
            })} 
          </Nav>
        </Container>
      </Navbar>
    </div>            
    </>
  );
}

export default Navigationbar






