import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router";
import Logo from '../../assets/img/logo.png';

export default function TastemapNavbar() {
    return (
        <Navbar bg="white" variant="light" expand="sm" sticky="top" className="shadow-sm">
            <Container fluid className="px-4">
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        alt="Home"
                        src={Logo}
                        width="50"
                        height="50"
                        className="me-2"
                    />
                    <span className="fw-bold fs-5">Tastemap Madison</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="fs-6">💖View all restaurants</Nav.Link>
                        <Nav.Link as={Link} to="/collections" className="fs-6">⭐Collections</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}