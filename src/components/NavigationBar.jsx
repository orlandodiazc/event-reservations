import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../assets/rocket.svg';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'Profile' },
];

const NavigationBar = () => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Container>
      <Navbar.Brand href="/">
        <img
          src={logo}
          alt="Rocket Logo"
          width="30"
          height="30"
          className="d-inline-block align-top me-1"
        />
        Space Travel
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <ul className="navbar-nav w-100">
            {links.map((link) => (
              <li key={link.text} className="nav-item mt-sm-1">
                <NavLink to={link.path} className="nav-link">
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
