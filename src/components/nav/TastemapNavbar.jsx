import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router";
import Logo from '../../assets/img/logo.png';
import './TastemapNavbar.css';

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
                        <Nav.Link as={Link} to="/Restaurants" className="fs-6">💖View all restaurants</Nav.Link>
                        <Nav.Link as={Link} to="/collections" className="fs-6">⭐Collections</Nav.Link>
                    </Nav>

                    <Form className="d-flex ms-3" onSubmit={(e) => { e.preventDefault(); /* handle search */ }}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}