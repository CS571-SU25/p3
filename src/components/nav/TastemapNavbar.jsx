import { Container, Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ correct import
import Logo from '../../assets/img/logo.png';
import './TastemapNavbar.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function TastemapNavbar() {
    const [query, setQuery] = useState('');
    const [price, setPrice] = useState('');
    const [cuisine, setCuisine] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams();
        if (query.trim()) params.set('search', query.trim());
        if (price) params.set('price', price);
        if (cuisine) params.set('cuisine', cuisine);

        navigate(`/restaurants?${params.toString()}`);
        setQuery('');
    };

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
                        <Nav.Link as={Link} to="/restaurants" className="fs-6">💖 View all restaurants</Nav.Link>
                        <Nav.Link as={Link} to="/collections" className="fs-6">⭐ Collections</Nav.Link>
                    </Nav>

                    <Form className="d-flex ms-3" onSubmit={handleSearch}>
                        <Form.Select
                            aria-label="Filter by price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="me-2"
                        >
                            <option value="">All Prices</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                            <option value="$$$$">$$$</option>
                        </Form.Select>

                        <Form.Select
                            aria-label="Filter by cuisine"
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            className="me-2"
                        >
                            <option value="">All Cuisines</option>
                            <option value="Thai">Thai</option>
                            <option value="Italian">Italian</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Mexican">Mexican</option>
                        </Form.Select>

                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <Button variant="outline-primary" type="submit">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}