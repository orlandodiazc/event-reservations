import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'Profile' },
];

const Navbar = () => (
  <nav>
    <ul>
      {links.map((link) => (
        <li key={link.text} className="nav-item">
          <NavLink to={link.path} className="nav-link">
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
