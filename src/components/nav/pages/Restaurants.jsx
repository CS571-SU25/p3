import restaurants from '../../contexts/restaurants';
import RestaurantCard from '../../content/RestaurantCard';

export default function Restaurants() {
    return (
        <div className="container mt-4">
            <h2 className="mb-4">All Restaurants</h2>
            {restaurants.map(r => (
                <RestaurantCard key={r.id} restaurant={r} />
            ))}
        </div>
    );
}