import { Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

export default function RestaurantCard({ restaurant, isCollected, onToggle }) {
    return (
        <Link to={`/restaurants/${restaurant.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card className="mb-4 shadow-sm restaurant-card">
                <Row className="g-0">
                    <Col md={4}>
                        <Card.Img
                            src={restaurant.image}
                            alt={restaurant.name}
                            style={{ height: "265px", width: "100%", objectFit: "cover" }}
                        />
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <Card.Text><strong>Price:</strong> {restaurant.priceRange}</Card.Text>
                            <Card.Text><strong>Cuisine:</strong> {restaurant.cuisine}</Card.Text>
                            <Card.Text><strong>Recommended:</strong> {restaurant.recommended.join(', ')}</Card.Text>
                            <Card.Text><small className="text-muted">{restaurant.address}</small></Card.Text>

                            <div className="d-flex gap-3 mt-3">
                                <Button
                                    className={`collect-btn ${isCollected ? 'collected' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault(); // prevent Link navigation
                                        onToggle(restaurant);
                                    }}
                                >
                                    ⭐ {isCollected ? "Collected" : "Collect"}
                                </Button>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
    );
}