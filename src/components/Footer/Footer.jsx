import { Link } from 'react-router-dom'

const Footer = () => {

  return (<>
    <div className="container-fluid bg-light">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link px-2 text-body-secondary">Menu</Link></li>
          <li className="nav-item"><Link to="/aboutus" className="nav-link px-2 text-body-secondary">About Us</Link></li>
        </ul>
        <p class="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </div>
  </>)

}

export default Footer