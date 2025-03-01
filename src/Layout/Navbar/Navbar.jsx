import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navigation = [
  { name: 'ABOUT', href: '/about' },
  { name: 'PORTFOLIO', href: '/portfolio' },
  { name: 'CONTACT', href: '/contact' },
];

export default function BootstrapNavbar() {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
          Start Framework
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}>
          {expanded ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navigation.map((item) => (
              <Nav.Link
                key={item.name}
                as={Link}
                to={item.href}
                onClick={() => setExpanded(false)}
                className={location.pathname === item.href ? 'text-white bg-teal-500 rounded px-3' : 'text-light px-3'}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
